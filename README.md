# React Furi

> Good Lookin' Furigana

[![npm](https://img.shields.io/npm/v/react-furi.svg?style=flat-square)](https://www.npmjs.com/package/react-furi)
[![npm](https://img.shields.io/npm/dt/react-furi.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-furi&from=2016-04-01)
[![Codecov branch](https://img.shields.io/codecov/c/github/DJTB/react-furi/master.svg?style=flat-square)](https://codecov.io/github/DJTB/react-furi)
<br />
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](./code_of_conduct.md)

## Why?

The [Ruby](https://developer.mozilla.org/en/docs/Web/HTML/Element/ruby) element often has less than ideal rendering. This React component will automatically strip redundant kana, eliminating unnecessary noise often present in texts with furigana. Alternatively, you can use furigana data from [JmdictFurigana](https://github.com/Doublevil/JmdictFurigana) to render compound readings _precisely_ over their respective kanji characters.

## Demo

[djtb.github.io/react-furi](https://djtb.github.io/react-furi)

## Installation

```sh
npm install --save react-furi
```

## Props

| Prop       | Type                 | Description                                                                                                     |
| ---------- | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| `word`     | _string_             | Japanese word                                                                                                   |
| `reading`  | _string_ (optional)            | Full reading of the Japanese word                                                                               |
| `furi`     | _string_ or _object_ (optional) | Furigana -> associated kanji location data                                                                      |
| `showFuri` | _boolean_ (optional)           | Whether or not to show furigana (does not apply if using custom render)                                         |
| `render`   | _function_ (optional)           | Custom render function, receives a single prop `pairs` which is an _array_ of grouped `[furigana, text]` pairs. |

## Basic Usage

```jsx
import { ReactFuri } from 'react-furi';
const MyComponent = () => <ReactFuri word="考え方" reading="かんがえかた" />;
```

![Example Reading Render](.github/example.png)

Or you can customize your rendering using the exported hook and compound components

```jsx
import { useFuriPairs, Wrapper, Pair, Text, Furi } from 'react-furi';

function MyComponent({ word, reading, furi, showFuri }) {
  // Memoized generation of text and accompanying furigana pairs
  const pairs = useFuriPairs(word, reading, furi);

  return (
    <Wrapper>
      {pairs.map(([furiText, text], index) => (
        <Pair key={text + index}>
          {showFuri && <Furi>{furiText}</Furi>}
          <Text>{text}</Text>
        </Pair>
      ))}
    </Wrapper>
  );
}
```

## Related

* [JmdictFurigana](https://github.com/Doublevil/JmdictFurigana) : Furigana dictionary
* [Wanakana](https://github.com/WaniKani/WanaKana) : Japanese romaji <-> kana transliteration
* [Hatsuon](https://github.com/DJTB/hatsuon) : Japanese pitch accent tools

## Contributors

Thanks goes to these people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/DJTB"><img src="https://avatars.githubusercontent.com/u/5353151?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Duncan Bay</b></sub></a><br /><a href="https://github.com/DJTB/hatsuon/commits?author=DJTB" title="Code">💻</a> <a href="https://github.com/DJTB/hatsuon/commits?author=DJTB" title="Documentation">📖</a> <a href="#infra-DJTB" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#design-DJTB" title="Design">🎨</a> <a href="https://github.com/DJTB/hatsuon/issues?q=author%3ADJTB" title="Bug reports">🐛</a> <a href="#ideas-DJTB" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-DJTB" title="Maintenance">🚧</a> <a href="https://github.com/DJTB/hatsuon/pulls?q=is%3Apr+reviewed-by%3ADJTB" title="Reviewed Pull Requests">👀</a> <a href="#security-DJTB" title="Security">🛡️</a> <a href="https://github.com/DJTB/hatsuon/commits?author=DJTB" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/latteouka"><img src="https://avatars.githubusercontent.com/u/11053904?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chun</b></sub></a><br /><a href="https://github.com/DJTB/hatsuon/issues?q=author%3Alatteouka" title="Bug reports">🐛</a> <a href="https://github.com/DJTB/hatsuon/commits?author=latteouka" title="Code">💻</a> <a href="https://github.com/DJTB/hatsuon/commits?author=latteouka" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT &copy; [Duncan Bay](https://github.com/DJTB)
