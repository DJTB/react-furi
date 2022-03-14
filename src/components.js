import React from 'react';

import { useFuriPairs } from './hooks';

const wrapperStyle = {
  display: 'inline-flex',
  flexFlow: 'row wrap',
  fontFamily:
    '"ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "TakaoPゴシック", TakaoPGothic, "游ゴシック", "游ゴシック体", YuGothic, "Yu Gothic", "メイリオ", Meiryo, "ＭＳ ゴシック", "MS Gothic", HiraKakuProN-W3, "MotoyaLCedar", "Droid Sans Japanese", sans-serif',
};

const pairStyle = {
  display: 'inline-flex',
  fontSize: '24px',
  lineHeight: '1',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-end',
  alignItems: 'center',
  alignSelf: 'flex-end',
};

const furiStyle = {
  display: 'block',
  fontSize: '0.5em',
  letterSpacing: '-0.02em',
  margin: '0 0.1em',
  paddingTop: '0.2em',
  paddingBottom: '0.1em',
  // don't interfere with selection of the content text
  userSelect: 'none',
  opacity: '0.9',
};

const textStyle = {
  display: 'block',
};

export function Wrapper({ style, ...props }) {
  return <span lang="ja" style={{ ...wrapperStyle, ...style }} {...props} />;
}

export function Pair({ style, ...props }) {
  return <span lang="ja" style={{ ...pairStyle, ...style }} {...props} />;
}

export function Furi({ style, ...props }) {
  return <span lang="ja" style={{ ...furiStyle, ...style }} {...props} />;
}

export function Text({ style, ...props }) {
  return <span lang="ja" style={{ ...textStyle, ...style }} {...props} />;
}

export function ReactFuri({ word, reading, furi, showFuri, render, ...props }) {
  const pairs = useFuriPairs(word, reading, furi);

  return typeof render === 'function' ? (
    render({ pairs })
  ) : (
    <Wrapper {...props}>
      {pairs.map(([furiText, text], index) => {
        const uniquePairKey = text + index;

        return (
          <Pair key={uniquePairKey}>
            {showFuri && <Furi>{furiText}</Furi>}
            <Text>{text}</Text>
          </Pair>
        );
      })}
    </Wrapper>
  );
}

ReactFuri.defaultProps = {
  word: '',
  reading: '',
  furi: '',
  showFuri: true,
};
