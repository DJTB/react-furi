import React from 'react';
import { render } from 'react-testing-library';
import cuid from 'cuid';
import 'jest-styled-components';
import 'dom-testing-library/extend-expect';

import ReactFuri from '../src/index';

describe('<ReactFuri />', () => {
  it('no reading or furi provided: just render word', () => {
    const { container } = render(<ReactFuri word="漢字" />);
    expect(container).toMatchSnapshot();
  });

  it('no furi provided: render relevant readings over kanji blocks', () => {
    const { container } = render(<ReactFuri word="お見舞い" reading="おみまい" />);
    expect(container).toMatchSnapshot();
  });

  it('furi provided: render furigana over related kanji blocks', () => {
    const { container } = render(<ReactFuri word="漢字" furi="0:かん;1:じ" />);
    expect(container).toMatchSnapshot();
  });

  it('showFuri false: no furigana rendered', () => {
    const { container } = render(<ReactFuri word="漢字" furi="0:かん;1:じ" showFuri={false} />);
    expect(container).toMatchSnapshot();
  });

  it('custom render prop', () => {
    const { container } = render(
      <ReactFuri
        word="漢字"
        furi="0:かん;1:じ"
        render={({ pairs }) => (
          <div>
            {pairs.map(([furi, text]) => (
              <dl key={cuid()}>
                <dd>{furi}</dd>
                <dt>{text}</dt>
              </dl>
            ))}
          </div>
        )}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
