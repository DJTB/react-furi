import { combineFuri, basicFuri, parseFuri, generatePairs } from '../utils';

describe('combineFuri()', () => {
  describe('defaults', () => {
    it('missing necessary params', () => {
      expect(combineFuri()).toEqual([['', '']]);
      expect(combineFuri('', '')).toEqual([['', '']]);
      expect(combineFuri('', '', '')).toEqual([['', '']]);
      expect(combineFuri('', '', '0:ああ')).toEqual([['', '']]);
    });

    describe('no reading or furi', () => {
      it('kanji word', () => {
        expect(combineFuri('下駄')).toEqual([['', '下駄']]);
      });

      it('hiragana word', () => {
        expect(combineFuri('ひらがな')).toEqual([['', 'ひらがな']]);
      });

      it('katakana word', () => {
        expect(combineFuri('カタカナ')).toEqual([['', 'カタカナ']]);
      });
    });

    describe('no furi', () => {
      it('kanji word', () => {
        expect(combineFuri('下駄', 'げた')).toEqual([['げた', '下駄']]);
      });

      it('hiragana word', () => {
        expect(combineFuri('ひらがな', 'ひらがな')).toEqual([['', 'ひらがな']]);
      });

      it('katakana word', () => {
        expect(combineFuri('カタカナ', 'カタカナ')).toEqual([['', 'カタカナ']]);
      });
    });
  });

  describe('with furi data', () => {
    const expected = [['', 'お'], ['せ', '世'], ['じ', '辞']];
    it('accepts furi location string', () => {
      expect(combineFuri('お世辞', 'おせじ', '1:せ;2:じ')).toEqual(expected);
      expect(combineFuri('お世辞', '', '1:せ;2:じ')).toEqual(expected);
    });

    it('accepts furi location object', () => {
      expect(combineFuri('お世辞', 'おせじ', { 1: 'せ', 2: 'じ' })).toEqual(expected);
      expect(combineFuri('お世辞', '', { 1: 'せ', 2: 'じ' })).toEqual(expected);
    });
  });

  describe('special readings', () => {
    it('handles special readings for better display', () => {
      // instead of putting the entire reading under the first kanji like the furi string suggests,
      // we use the "reading only" display so it's centered over the whole kanji group
      // this only applies to 義訓/熟字訓 words with a single initial "0:かな" furi string
      expect(combineFuri('今日', 'きょう', '0:きょう')).toEqual([['きょう', '今日']]);
    });
  });

  describe('without furi data', () => {
    it('avoid redundant kana fallbacks', () => {
      expect(combineFuri('すいか', 'すいか')).toEqual([['', 'すいか']]);
      expect(combineFuri('すいか', 'スイカ')).toEqual([['', 'すいか']]);
      expect(combineFuri('スイカ', 'スイカ')).toEqual([['', 'スイカ']]);
      expect(combineFuri('スイカ', 'すいか')).toEqual([['', 'スイカ']]);
    });

    it('trailing okurigana fallback', () => {
      expect(combineFuri('大人しい', 'おとなしい')).toEqual([['おとな', '大人'], ['', 'しい']]);
    });

    it('leading bikago fallback', () => {
      expect(combineFuri('お札', 'おふだ')).toEqual([['', 'お'], ['ふだ', '札']]);
    });

    it('leading bikago and trailing okurigana fallback', () => {
      expect(combineFuri('お見舞い', 'おみまい')).toEqual([
        ['', 'お'],
        ['みま', '見舞'],
        ['', 'い'],
      ]);
    });
    // not perfect since 'ー' is caught as a kanji, a few extra html elements, but it'll look fine visually
    it('reasonably handles whacky wanikani nonsense dual kana readings', () => {
      expect(combineFuri('缶ビール', 'かんビール')).toEqual([
        ['かん', '缶'],
        ['', 'ビ'],
        ['', 'ー'],
        ['', 'ル'],
      ]);
      expect(combineFuri('ハート型', 'ハートがた')).toEqual([
        ['', 'ハ'],
        ['', 'ー'],
        ['', 'ト'],
        ['がた', '型'],
      ]);
    });
  });
});

describe('basicFuri()', () => {
  describe('defaults', () => {
    it('no args', () => {
      expect(basicFuri()).toEqual([]);
    });

    it('no reading', () => {
      expect(basicFuri('漢字')).toEqual([['', '漢字']]);
    });
  });

  it('slices kana where present', () => {
    expect(basicFuri('お札', 'おふだ')).toEqual([['', 'お'], ['ふだ', '札']]);
    expect(basicFuri('使い方', 'つかいかた')).toEqual([['つか', '使'], ['', 'い'], ['かた', '方']]);
    expect(basicFuri('大人しい', 'おとなしい')).toEqual([['おとな', '大人'], ['', 'しい']]);
    expect(basicFuri('申し申し', 'もしもし')).toEqual([
      ['も', '申'],
      ['', 'し'],
      ['も', '申'],
      ['', 'し'],
    ]);
    expect(basicFuri('お見舞い', 'おみまい')).toEqual([['', 'お'], ['みま', '見舞'], ['', 'い']]);
    // not a real word :P
    expect(basicFuri('お見い舞い', 'おみいまい')).toEqual([
      ['', 'お'],
      ['み', '見'],
      ['', 'い'],
      ['ま', '舞'],
      ['', 'い'],
    ]);
  });
});

describe('parseFuri()', () => {
  it('sane default', () => {
    expect(parseFuri()).toEqual([]);
  });

  it('works', () => {
    expect(parseFuri('1:せ;2:じ')).toEqual([[[1, 2], 'せ'], [[2, 3], 'じ']]);
  });

  it('can span multiple kanji', () => {
    expect(parseFuri('0-1:おとな')).toEqual([[[0, 2], 'おとな']]);
  });

  it('can partially span multiple kanji', () => {
    expect(parseFuri('0-1:うーろん;2:ちゃ')).toEqual([[[0, 2], 'うーろん'], [[2, 3], 'ちゃ']]);
  });
});

describe('generatePairs()', () => {
  it('sane default', () => {
    expect(generatePairs()).toEqual([]);
  });

  it('works', () => {
    expect(generatePairs('お世辞', [[[1, 2], 'せ'], [[2, 3], 'じ']])).toEqual([
      ['', 'お'],
      ['せ', '世'],
      ['じ', '辞'],
    ]);
  });

  it('handles words with separated kanji and trailing okurigana', () => {
    expect(generatePairs('貫き通す', [[[0, 1], 'つらぬ'], [[2, 3], 'とお']])).toEqual([
      ['つらぬ', '貫'],
      ['', 'き'],
      ['とお', '通'],
      ['', 'す'],
    ]);
  });
});
