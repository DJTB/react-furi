'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-family: \'Nunito Sans\',\'Liberation Sans\', TakaoPGothic, system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Oxygen-Sans,Cantarell,\'Helvetica Neue\',sans-serif;\n  *[lang="ja"] {\n    font-family: \'\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN\', \'Hiragino Kaku Gothic ProN\', \'TakaoP\u30B4\u30B7\u30C3\u30AF\' , TakaoPGothic, \'\u6E38\u30B4\u30B7\u30C3\u30AF\', \'\u6E38\u30B4\u30B7\u30C3\u30AF\u4F53\', YuGothic, \'Yu Gothic\', \'\u30E1\u30A4\u30EA\u30AA\', Meiryo, \'\uFF2D\uFF33 \u30B4\u30B7\u30C3\u30AF\', \'MS Gothic\', HiraKakuProN-W3, \'MotoyaLCedar\', \'Droid Sans Japanese\', sans-serif;\n  }\n'], ['\n  font-family: \'Nunito Sans\',\'Liberation Sans\', TakaoPGothic, system-ui,-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,Oxygen-Sans,Cantarell,\'Helvetica Neue\',sans-serif;\n  *[lang="ja"] {\n    font-family: \'\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN\', \'Hiragino Kaku Gothic ProN\', \'TakaoP\u30B4\u30B7\u30C3\u30AF\' , TakaoPGothic, \'\u6E38\u30B4\u30B7\u30C3\u30AF\', \'\u6E38\u30B4\u30B7\u30C3\u30AF\u4F53\', YuGothic, \'Yu Gothic\', \'\u30E1\u30A4\u30EA\u30AA\', Meiryo, \'\uFF2D\uFF33 \u30B4\u30B7\u30C3\u30AF\', \'MS Gothic\', HiraKakuProN-W3, \'MotoyaLCedar\', \'Droid Sans Japanese\', sans-serif;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  max-width: 50rem;\n  margin: 0 auto;\n  padding: 1rem;\n'], ['\n  max-width: 50rem;\n  margin: 0 auto;\n  padding: 1rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  margin-bottom: 2rem;\n'], ['\n  margin-bottom: 2rem;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding-bottom: 2px;\n  border-bottom: 1px solid lightGrey;\n'], ['\n  padding-bottom: 2px;\n  border-bottom: 1px solid lightGrey;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactHighlight = require('react-highlight.js');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _reactPowerplug = require('react-powerplug');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* eslint-disable react/no-array-index-key */

// eslint-disable-next-line
(0, _styledComponents.injectGlobal)(_templateObject);

var Code = function Code() {
  var codeString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return _react2.default.createElement(
    _reactHighlight2.default,
    { language: 'javascript' },
    codeString
  );
};

var Main = _styledComponents2.default.main(_templateObject2);

var Section = _styledComponents2.default.section(_templateObject3);

var SectionTitle = _styledComponents2.default.h3(_templateObject4);

var Demo = function Demo() {
  return _react2.default.createElement(
    Main,
    null,
    _react2.default.createElement(
      'header',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'ReactFuri Examples'
      )
    ),
    _react2.default.createElement(
      Section,
      null,
      _react2.default.createElement(
        SectionTitle,
        null,
        'Unstyled <ruby> element for comparison'
      ),
      Code('<ruby><rb>\u5927\u4EBA\u3057\u3044</rb><rt>\u304A\u3068\u306A\u3057\u3044</rt></ruby>'),
      _react2.default.createElement(
        'ruby',
        { style: { fontSize: '1.5rem' } },
        _react2.default.createElement(
          'rb',
          null,
          '\u5927\u4EBA\u3057\u3044'
        ),
        _react2.default.createElement(
          'rt',
          null,
          '\u304A\u3068\u306A\u3057\u3044'
        )
      )
    ),
    _react2.default.createElement(
      Section,
      null,
      _react2.default.createElement(
        SectionTitle,
        null,
        'Specific furi location placement'
      ),
      Code('<ReactFuri word="\u9001\u308A\u4EEE\u540D" furi="0:\u304A\u304F;2:\u304C;3:\u306A" />'),
      _react2.default.createElement(_index2.default, { word: '\u9001\u308A\u4EEE\u540D', furi: '0:\u304A\u304F;2:\u304C;3:\u306A' }),
      Code('<ReactFuri word="\u9001\u308A\u4EEE\u540D" furi={{ 0:\'\u304A\u304F\', 2:\'\u304C\', 3:\'\u306A\' }} />'),
      _react2.default.createElement(_index2.default, { word: '\u9001\u308A\u4EEE\u540D', furi: { 0: 'おく', 2: 'が', 3: 'な' } })
    ),
    _react2.default.createElement(
      Section,
      null,
      _react2.default.createElement(
        SectionTitle,
        null,
        'Intelligent furigana placement via reading'
      ),
      Code('<ReactFuri word="\u304A\u9670" reading="\u304A\u304B\u3052" />'),
      _react2.default.createElement(_index2.default, { word: '\u304A\u9670', reading: '\u304A\u304B\u3052' }),
      Code('<ReactFuri word="\u5927\u4EBA\u3057\u3044" reading="\u304A\u3068\u306A\u3057\u3044" />'),
      _react2.default.createElement(_index2.default, { word: '\u5927\u4EBA\u3057\u3044', reading: '\u304A\u3068\u306A\u3057\u3044' }),
      Code('<ReactFuri word="\u4F7F\u3044\u65B9" reading="\u3064\u304B\u3044\u304B\u305F" />'),
      _react2.default.createElement(_index2.default, { word: '\u4F7F\u3044\u65B9', reading: '\u3064\u304B\u3044\u304B\u305F' }),
      Code('<ReactFuri word="\u304A\u898B\u821E\u3044" reading="\u304A\u307F\u307E\u3044" />'),
      _react2.default.createElement(_index2.default, { word: '\u304A\u898B\u821E\u3044', reading: '\u304A\u307F\u307E\u3044' })
    ),
    _react2.default.createElement(
      Section,
      null,
      _react2.default.createElement(
        SectionTitle,
        null,
        'Avoids rendering redundant furigana'
      ),
      Code('<ReactFuri word="\u30A2\u30A4\u30B9\u30AF\u30EA\u30FC\u30E0" reading="\u30A2\u30A4\u30B9\u30AF\u30EA\u30FC\u30E0" />'),
      _react2.default.createElement(_index2.default, { word: '\u30A2\u30A4\u30B9\u30AF\u30EA\u30FC\u30E0', reading: '\u30A2\u30A4\u30B9\u30AF\u30EA\u30FC\u30E0' }),
      Code('<ReactFuri word="\u3059\u3044\u304B" reading="\u30B9\u30A4\u30AB" />'),
      _react2.default.createElement(_index2.default, { word: '\u3059\u3044\u304B', reading: '\u30B9\u30A4\u30AB' })
    ),
    _react2.default.createElement(
      Section,
      null,
      _react2.default.createElement(
        SectionTitle,
        null,
        'Showfuri prop'
      ),
      Code('<Toggle render={({ on, toggle }) => (\n' + '  <ReactFuri word="漢字" reading="かんじ" showFuri={on} onClick={toggle} />\n' + ')}/>'),
      _react2.default.createElement(_reactPowerplug.Toggle, {
        render: function render(_ref) {
          var on = _ref.on,
              toggle = _ref.toggle;
          return _react2.default.createElement(_index2.default, {
            style: { cursor: 'pointer' },
            word: '\u6F22\u5B57',
            furi: '0:\u304B\u3093;1:\u3058',
            showFuri: on,
            onClick: toggle
          });
        }
      })
    ),
    _react2.default.createElement(
      Section,
      null,
      _react2.default.createElement(
        SectionTitle,
        null,
        'Custom render prop'
      ),
      Code('<ReactFuri \n' + '  word="\u5272\u308A\u7BB8"\n' + '  reading="\u308F\u308A\u3070\u3057"\n' + '  render={({ pairs }) => <pre>{JSON.stringify(pairs, null, 2)}</pre>}\n' + '/>'),
      _react2.default.createElement(_index2.default, {
        word: '\u5272\u308A\u7BB8',
        reading: '\u308F\u308A\u3070\u3057',
        render: function render(_ref2) {
          var pairs = _ref2.pairs;
          return _react2.default.createElement(
            'pre',
            null,
            JSON.stringify(pairs, null, 2)
          );
        }
      })
    ),
    _react2.default.createElement(
      Section,
      null,
      _react2.default.createElement(
        SectionTitle,
        null,
        'Example Japanese sentence with ReactFuri'
      ),
      Code('<p>\n' + '  {[\n' + '    [\'\uFF15\'],\n' + '    [\'\u6708\', \'\u304C\u3064\'],\n' + '    [\'\uFF11\u65E5\', \'\u3064\u3044\u305F\u3061\'],\n' + '    [\'\u306E\'],\n' + '    [\'\u30E1\u30FC\u30C7\u30FC\'],\n' + '    [\'\u306B\u3001\'],\n' + '    [\'\u30D1\u30EA\'],\n' + '    [\'\u3067\u306F\'],\n' + '    [\'\u6BCE\u5E74\', \'\u307E\u3044\u3068\u3057\'],\n' + '    [\'\u50CD\u304F\', \'\u306F\u305F\u3089\u304F\'],\n' + '    [\'\u4EBA\u305F\u3061\', \'\u3072\u3068\u305F\u3061\'],\n' + '    [\'\u304C\'],\n' + '    [\'\u30C7\u30E2\'],\n' + '    [\'\u3092\'],\n' + '    [\'\u884C\u306A\u3063\u3066\', \'\u304A\u3053\u306A\u3063\u3066\'],\n' + '    [\'\u3044\u307E\u3059\'],\n' + '  ].map(([word, reading], i) => \n' + '    <ReactFuri key={i} word={word} reading={reading} />\n' + '  )}\n' + '</p>\n'),
      _react2.default.createElement(
        'p',
        { style: { display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end' } },
        [['５'], ['月', 'がつ'], ['１日', 'ついたち'], ['の'], ['メーデー'], ['に、'], ['パリ'], ['では'], ['毎年', 'まいとし'], ['働く', 'はたらく'], ['人たち', 'ひとたち'], ['が'], ['デモ'], ['を'], ['行なって', 'おこなって'], ['います']].map(function (_ref3, i) {
          var _ref4 = _slicedToArray(_ref3, 2),
              text = _ref4[0],
              reading = _ref4[1];

          return _react2.default.createElement(_index2.default, { key: i, word: text, reading: reading });
        })
      )
    )
  );
};

(0, _reactDom.render)(_react2.default.createElement(Demo, null), document.getElementById('app'));