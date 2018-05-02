// TODO: semantic-release-cli setup
// TODO: test render with ReactFuri.Pair etc works as expected
// TODO: remove styled-components so consumers can style however they like
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cuid from 'cuid';

import { combineFuri } from './utils';

const Wrapper = styled.div`
  display: flex;
  font-size: 2rem;
`;

const Pair = styled.div`
  display: flex;
  line-height: 1;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
`;

const Furi = styled.span`
  display: block;
  font-size: 0.5em;
  letter-spacing: -0.02em;
  padding-bottom: 0.2em;
  user-select: none; /* don't interfere with main text selection */
  opacity: 0.9;
`;

const Kanji = styled.span`
  display: block;
`;

function ReactFuri({ word, reading, furi, showFuri, render, ...props }) {
  const pairs = combineFuri(word, reading, furi);
  return render ? (
    render({ pairs })
  ) : (
    <Wrapper {...props}>
      {pairs.map(([kana, kanji]) => (
        <Pair key={cuid()} lang="ja">
          {showFuri && <Furi>{kana}</Furi>}
          <Kanji>{kanji}</Kanji>
        </Pair>
      ))}
    </Wrapper>
  );
}

ReactFuri.propTypes = {
  word: PropTypes.string.isRequired,
  reading: PropTypes.string,
  furi: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  showFuri: PropTypes.bool,
  render: PropTypes.func, // eslint-disable-line react/require-default-props
};

ReactFuri.defaultProps = {
  reading: '',
  furi: '',
  showFuri: true,
};

ReactFuri.Pair = Pair;
ReactFuri.Furi = Furi;
ReactFuri.Kanji = Kanji;

export default ReactFuri;
