import React from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Toggle } from 'react-powerplug';
import styled, { createGlobalStyle } from 'styled-components';
import GithubCorner from 'react-github-corner';
import { useFuriPairs, ReactFuri, Wrapper, Pair, Text, Furi } from '../index';

/* eslint-disable react/no-array-index-key */

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Nunito Sans','Liberation Sans', TakaoPGothic, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Cantarell,'Helvetica Neue', sans-serif;

  *[lang="ja"] {
    font-family: 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'TakaoPゴシック', TakaoPGothic, '游ゴシック', '游ゴシック体', YuGothic, 'Yu Gothic', 'メイリオ', Meiryo, 'ＭＳ ゴシック', 'MS Gothic', HiraKakuProN-W3, 'MotoyaLCedar', 'Droid Sans Japanese', sans-serif;
  }
}

pre + span:not(:last-child) {
  margin-bottom: 1rem;
}
`;

function Code(codeString = '') {
  return (
    <SyntaxHighlighter language="javascript" style={nightOwl}>
      {codeString}
    </SyntaxHighlighter>
  );
}

function MyComponent({ word, reading, furi, showFuri }) {
  const pairs = useFuriPairs(word, reading, furi);

  return (
    <Wrapper
      style={{
        border: '1px solid black',
        borderRadius: '4px',
        padding: '.5rem',
      }}
    >
      {pairs.map(([furiText, text], index) => (
        <Pair key={text + index}>
          {showFuri && <Furi style={{ color: 'crimson' }}>{furiText}</Furi>}
          <Text style={{ color: 'cornflowerblue' }}>{text}</Text>
        </Pair>
      ))}
    </Wrapper>
  );
}

const Main = styled.main`
  max-width: 50rem;
  margin: 0 auto;
  padding: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  padding-bottom: 2px;
  border-bottom: 1px solid lightGrey;
`;

function Demo() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <GithubCorner href="https://github.com/DJTB/react-furi" />
        <header>
          <h1>ReactFuri Examples</h1>
        </header>
        <Section>
          <SectionTitle>
            {'Default browser <ruby> element for comparison'}
          </SectionTitle>
          {Code(`<ruby>
  <rb>大人しい</rb>
  <rt>おとなしい</rt>
</ruby>`)}
          <ruby style={{ fontSize: '1.5rem' }}>
            <rb>大人しい</rb>
            <rt>おとなしい</rt>
          </ruby>
        </Section>

        <Section>
          <SectionTitle>
            Intelligent furigana placement via reading
          </SectionTitle>
          {Code('<ReactFuri word="大人しい" reading="おとなしい" />')}
          <ReactFuri word="大人しい" reading="おとなしい" />
          {Code('<ReactFuri word="お陰" reading="おかげ" />')}
          <ReactFuri word="お陰" reading="おかげ" />
          {Code('<ReactFuri word="使い方" reading="つかいかた" />')}
          <ReactFuri word="使い方" reading="つかいかた" />
          {Code('<ReactFuri word="申し申し" reading="もしもし" />')}
          <ReactFuri word="申し申し" reading="もしもし" />
          {Code('<ReactFuri word="お見舞い" reading="おみまい" />')}
          <ReactFuri word="お見舞い" reading="おみまい" />
        </Section>

        <Section>
          <SectionTitle>Avoids rendering redundant furigana</SectionTitle>
          {Code('<ReactFuri word="アイスクリーム" reading="アイスクリーム" />')}
          <ReactFuri word="アイスクリーム" reading="アイスクリーム" />
          {Code('<ReactFuri word="すいか" reading="スイカ" />')}
          <ReactFuri word="すいか" reading="スイカ" />
        </Section>

        <Section>
          <SectionTitle>
            Precise furi placement{' '}
            <em>
              (using{' '}
              <a href="https://github.com/Doublevil/JmdictFurigana">
                JmdictFurigana
              </a>{' '}
              data)
            </em>
          </SectionTitle>
          {Code('<ReactFuri word="お見舞い" furi="1:み;2:ま" />')}
          <ReactFuri word="お見舞い" furi="1:み;2:ま" />
          {Code(
            '<ReactFuri word="送り仮名" furi={{ 0:"おく", 2:"が", 3:"な" }} />'
          )}
          <ReactFuri word="送り仮名" furi={{ 0: 'おく', 2: 'が', 3: 'な' }} />
        </Section>

        <Section>
          <SectionTitle>Toggling reading via `showFuri` prop</SectionTitle>
          {Code(`<Toggle render={({ on, toggle }) => (
  <ReactFuri word="漢字" furi="0:かん;1:じ" showFuri={on} onClick={toggle} />
)} />`)}
          <Toggle
            render={({ on, toggle }) => (
              <ReactFuri
                style={{ cursor: 'pointer' }}
                word="漢字"
                furi="0:かん;1:じ"
                showFuri={on}
                onClick={toggle}
              />
            )}
          />
        </Section>

        <Section>
          <SectionTitle>Control rendering via render prop</SectionTitle>
          {Code(`<ReactFuri
  word="割り箸"
  reading="わりばし"
  render={({ pairs }) => <pre>{JSON.stringify(pairs)}</pre>}
/>`)}
          <ReactFuri
            word="割り箸"
            reading="わりばし"
            render={({ pairs }) => <pre>{JSON.stringify(pairs)}</pre>}
          />
        </Section>

        <Section>
          <SectionTitle>
            Control rendering completely via compound components and provided
            hook
          </SectionTitle>
          {/* prettier-ignore */}
          {Code(`import { useFuriPairs, Wrapper, Pair, Text, Furi } from 'react-furi'

function MyComponent({ word, reading, furi, showFuri }) {
  const pairs = useFuriPairs(word, reading, furi);

  return (
    <Wrapper
      style={{
        border: "1px solid black",
        borderRadius: "4px",
        padding: ".5rem",
      }}
    >
      {pairs.map(([furiText, text], index) => (
        <Pair key={text + index}>
          {showFuri && <Furi style={{color: 'coral'}}>{furiText}</Furi>}
          <Text style={{color: 'blue'}}>{text}</Text>
        </Pair>
      ))}
    </Wrapper>
  );
}
// render
// <MyComponent word="割り箸" reading="わりばし" />
`)}
          <MyComponent word="割り箸" reading="わりばし" showFuri />
        </Section>
        <Section>
          <SectionTitle>Example Japanese sentence with ReactFuri</SectionTitle>
          {Code(`<p style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end" }}>
  {[
    ["５"],
    ["月", "がつ"],
    ["１日", "ついたち"],
    ["の"],
    ["メーデー"],
    ["に、"],
    ["パリ"],
    ["では"],
    ["毎年", "まいとし"],
    ["働く", "はたらく"],
    ["人たち", "ひとたち"],
    ["が"],
    ["デモ"],
    ["を"],
    ["行なって", "おこなって"],
    ["います"],
  ].map(([word, reading], index) => (
    <ReactFuri key={word+index} word={word} reading={reading} />
  ))}
</p>`)}
          <p
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
            }}
          >
            {[
              ['５'],
              ['月', 'がつ'],
              ['１日', 'ついたち'],
              ['の'],
              ['メーデー'],
              ['に、'],
              ['パリ'],
              ['では'],
              ['毎年', 'まいとし'],
              ['働く', 'はたらく'],
              ['人たち', 'ひとたち'],
              ['が'],
              ['デモ'],
              ['を'],
              ['行なって', 'おこなって'],
              ['います'],
            ].map(([word, reading], index) => (
              <ReactFuri key={word + index} word={word} reading={reading} />
            ))}
          </p>
        </Section>
      </Main>
    </>
  );
}

render(<Demo />, document.getElementById('app'));
