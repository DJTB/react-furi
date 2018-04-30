import { stripOkurigana, isKanji, isKatakana } from 'wanakana';

/**
 * Combines furigana with kanji into an array of string pairs.
 * @param  {String} word vocab kanji word
 * @param  {String} reading vocab kana reading
 * @param  {String|Object} furi furigana placement info
 * @return {Array} furigana/kanji pairs
 * @example
 * combineFuri('お世辞', 'おせじ', '1:せ;2:じ')
 * // => [['', 'お'], ['せ', '世'], ['じ', '辞']]
 * combineFuri('大人しい', 'おとなしい') // fallback via basicFuri()
 * // => [['おとな', '大人'], ['', 'しい']]
 * combineFuri('使い方', 'つかいかた') // fallback via basicFuri()
 * // => [['つかいかた', '使い方']]
 *
 * // special reading fallback when chars are only kanji and furi is set to only 0:
 * combineFuri('胡座', 'あぐら', '0:あぐら')
 * // => [['あぐら', '胡座']]
 * // otherwise it displays weirdly with different furi/char font sizes
 * // or centered text when provided as [['あぐら', '胡'], ['', '座']]
 */
export function combineFuri(word = '', reading = '', furi = '') {
  const furiLocs = parseFuri(furi);
  // 義訓/熟字訓 words with a single furi loc: 今日 "0:きょう"
  const isSpecialReading = furiLocs.length === 1 && [...word].every(isKanji);

  if (!furi || isSpecialReading) {
    return basicFuri(word, reading);
  }
  return generatePairs(word, furiLocs);
}

/**
 * Displays simple furigana by separating main kanji and trailing okurigana
 * @param  {String} [word=''] '大人しい'
 * @param  {String} [reading=''] 'おとなしい'
 * @return {Array} [['おとな', '大人'], ['', 'しい']]
 */
export function basicFuri(word = '', reading = '') {
  // NOTE: with weird combos like 缶ビール and ハート型
  // it's better to just render entire reading if no furi provided
  const isKanjiKatakanaCombo = [...word].some(isKanji) && [...word].some(isKatakana);

  if (!word) {
    return [];
  }
  if (word === reading) {
    return [['', word]];
  }
  if (isKanjiKatakanaCombo) {
    return [[reading, word]];
  }

  const strippedWord = stripOkurigana(word);
  const strippedReading = stripOkurigana(reading, { matchKanji: word });
  const okurigana = word.slice(strippedWord.length);

  return [[strippedReading, strippedWord]].concat(okurigana ? [['', okurigana]] : []);
}

export function parseFuri(data) {
  return typeof data === 'string' ? parseFuriString(data) : parseFuriObject(data);
}

/**
 * Parses furigana placement object
 * @param  {Object} [locations={}] { 1:'せ', 2:'じ' }
 * @return {Array} [ [[1, 2], 'せ'], [[2, 3], 'じ'] ]
 */
function parseFuriObject(locations = {}) {
  return Object.entries(locations).map(([start, content]) => [[+start, +start + 1], content]);
}

/**
 * Parses furigana placement string
 * @param  {String} [locations=''] '1:せ;2:じ'
 * @return {Array} [ [[1, 2], 'せ'], [[2, 3], 'じ'] ]
 */
function parseFuriString(locations = '') {
  return locations.split(';').map((entry) => {
    const [indexes, content] = entry.split(':');
    const [start, end] = indexes.split('-').map(Number);
    // NOTE: in the JMDict furistring data, the end index is either missing
    // or it is listed as the *start* index of the final char ¯\_(ツ)_/¯
    // so we need to bump it either way to encompass that char
    return [[start, end ? end + 1 : start + 1], content];
  });
}

/**
 * Generates array pairs consisting of furigana and kanji
 * @param  {String} word 'お世辞'
 * @param  {Array} furiLocs [[[1, 2], 'せ'], [[2, 3], 'じ']]
 * @return {Array} [['', 'お'], ['せ', '世'], ['じ', '辞']]
 */
export function generatePairs(word = '', furiLocs = []) {
  let prevCharEnd = 0;

  return furiLocs.reduce((pairs, [[start, end], furiText], index, source) => {
    // if no furigana at this index, add intervening chars
    if (start !== prevCharEnd) {
      pairs.push(['', word.slice(prevCharEnd, start)]);
    }

    // add furigana and associated chars
    pairs.push([furiText, word.slice(start, end)]);

    // if no more furigana left, add any remaining chars/okurigana with blank furi
    if (end < word.length && !source[index + 1]) {
      pairs.push(['', word.slice(end)]);
    }

    prevCharEnd = end;
    return pairs;
  }, []);
}
