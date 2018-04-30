import { combineFuri, basicFuri, parseFuri, generatePairs } from '../utils';

describe('combineFuri()', () => {
  describe('defaults', () => {
    it('no args', () => {
      expect(combineFuri()).toEqual([]);
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
      // this only applies to 義訓/熟字訓 words with an "0:かな" furi string
      expect(combineFuri('今日', 'きょう', '0:きょう')).toEqual([['きょう', '今日']]);
    });
  });
  describe('without furi data', () => {
    it('kana fallback', () => {
      expect(combineFuri('すいか', 'スイカ')).toEqual([['スイカ', 'すいか']]);
    });
    it('trailing okurigana fallback', () => {
      expect(combineFuri('大人しい', 'おとなしい')).toEqual([['おとな', '大人'], ['', 'しい']]);
    });
    it('trailing okurigana with repeated inner kana token (し) fallback', () => {
      expect(combineFuri('申し申し', 'もしもし')).toEqual([['もしも', '申し申'], ['', 'し']]);
    });
    it('inner okurigana fallback', () => {
      expect(combineFuri('使い方', 'つかいかた')).toEqual([['つかいかた', '使い方']]);
    });
    it('initial okurigana fallback', () => {
      expect(combineFuri('お世辞', 'おせじ')).toEqual([['おせじ', 'お世辞']]);
    });
    it("passes through mixed kanji katakana words since they're weirdo", () => {
      expect(combineFuri('缶ビール', 'かんびーる')).toEqual([['かんびーる', '缶ビール']]);
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

  it('splits by okurigana if present', () => {
    expect(basicFuri('大人しい', 'おとなしい')).toEqual([['おとな', '大人'], ['', 'しい']]);
  });

  it('renders whole reading if no okurigana', () => {
    expect(basicFuri('使い方', 'つかいかた')).toEqual([['つかいかた', '使い方']]);
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
