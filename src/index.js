import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { combineFuri } from './utils';

const Wrapper = styled.span`
  display: inline-flex;
  flex-flow: row wrap;
`;

const Pair = styled.span`
  display: inline-flex;
  font-size: 24px;
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
  margin: 0 0.1em;
  padding-top: 0.2em;
  padding-bottom: 0.1em;
  user-select: none; /* don't interfere with main text selection */
  opacity: 0.9;
`;

const Text = styled.span`
  display: block;
`;

function ReactFuri({ word, reading, furi, showFuri, render, ...props }) {
  const pairs = combineFuri(word, reading, furi);

  return render ? (
    render({ pairs })
  ) : (
    <Wrapper lang="ja" {...props}>
      {pairs.map(([furiText, text], index) => (
        // "list" is static, index is fine
        // eslint-disable-next-line react/no-array-index-key
        <Pair key={index}>
          {showFuri && <Furi>{furiText}</Furi>}
          <Text>{text}</Text>
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

ReactFuri.Wrapper = Wrapper;
ReactFuri.Pair = Pair;
ReactFuri.Furi = Furi;
ReactFuri.Text = Text;

export default ReactFuri;
