# React Furi

> Good Lookin' Furigana

[![npm](https://img.shields.io/npm/v/react-furi.svg?style=flat-square)](https://www.npmjs.com/package/react-furi)
[![npm](https://img.shields.io/npm/dt/react-furi.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-furi&from=2016-04-01)
[![Travis branch](https://img.shields.io/travis/DJTB/react-furi/master.svg?style=flat-square)](https://travis-ci.org/DJTB/react-furi)
[![Codecov branch](https://img.shields.io/codecov/c/github/DJTB/react-furi/master.svg?style=flat-square)](https://codecov.io/github/DJTB/react-furi)
<br />
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Code of Conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](./code_of_conduct.md)

## REPO is WIP

Component extracted from a production site.
Currently missing from repo:

* bundling
* render tests
* NPM publish
* example demo
* plain css => removal of styled-components as dependency

## Why?

The [Ruby](https://developer.mozilla.org/ja/docs/Web/HTML/Element/ruby) element often has less than ideal rendering. This React component allows you to use furigana data from [JmdictFurigana](https://github.com/Doublevil/JmdictFurigana) to render only the necessary readings over their respective characters. Also allows better styling control of your furigana, props to easily show/hide furigana, and fallbacks to render similarly to Ruby tags, but without unnecessary trailing [okurigana](https://en.wikipedia.org/wiki/Okurigana).

<!--
## Installation

```sh
npm install --save react-furi
```

## Demo

[Examples](https://djtb.github.io/react-furi)
-->

## Usage

```js
import ReactFuri from 'react-furi';
const MyComponent = () => <ReactFuri word="考え方" furi="0:かんがえ;2:かた" />;
```

![Example Render](.github/example.png)

## Related

* [JmdictFurigana](https://github.com/Doublevil/JmdictFurigana) : Furigana dictionary
* [Wanakana](https://github.com/WaniKani/WanaKana) : Japanese romaji <-> kana transliteration
* [Hatsuon](https://github.com/DJTB/hatsuon) : Japanese pitch accent tools

## Contributors

Thanks goes to these people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/5353151?s=100" width="100px;"/><br /><sub><b>Duncan Bay</b></sub>](https://github.com/DJTB)<br />[💻](https://github.com/DJTB/react-furi/commits?author=DJTB "Code") [📖](https://github.com/DJTB/react-furi/commits?author=DJTB "Documentation") [🚇](#infra-DJTB "Infrastructure (Hosting, Build-Tools, etc)") [🎨](#design-DJTB "Design") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT &copy; [Duncan Bay](https://github.com/DJTB)
