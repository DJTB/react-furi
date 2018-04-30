// import 'jest-styled-components';
import React from 'react';
// import { render } from 'enzyme';

import ReactFuri from '../index';

const render = () => 'FIXME';

describe('<ReactFuri />', () => {
  it('no furi provided: render entire reading over kanji block', () => {
    const renderedComponent = render(<ReactFuri word="漢字" reading="かんじ" />);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('furi provided: render readings over related kanji blocks', () => {
    const renderedComponent = render(<ReactFuri word="漢字" reading="かんじ" furi="0:かん;1:じ" />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
