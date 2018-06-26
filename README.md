# chin-plugin-convert-svg

[![npm](https://img.shields.io/npm/v/chin-plugin-convert-svg.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/chin-plugin-convert-svg)
[![npm](https://img.shields.io/npm/dm/chin-plugin-convert-svg.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/chin-plugin-convert-svg)
[![Build Status](https://img.shields.io/travis/chinjs/chin-plugin-convert-svg.svg?longCache=true&style=flat-square)](https://travis-ci.org/chinjs/chin-plugin-convert-svg)
[![Coverage Status](https://img.shields.io/codecov/c/github/chinjs/chin-plugin-convert-svg.svg?longCache=true&style=flat-square)](https://codecov.io/github/chinjs/chin-plugin-convert-svg)

[chin](https://github.com/chinjs/chin) plugin using [convert-svg](https://github.com/NotNinja/convert-svg).

## Installation
```shell
yarn add -D chin chin-plugin-convert-svg
```

## Usage
### `convertsvg(ext[, options])`
```js
import convertsvg from 'chin-plugin-convert-svg'

const svg2png = convertsvg('.png')
const svg2jpg = convertsvg('.jpg')
const svg2jpeg = convertsvg('.jpeg')
```

#### options
- [`convert-svg-to-png`](https://github.com/NotNinja/convert-svg/tree/master/packages/convert-svg-to-png#convertinput-options)
- [`convert-svg-to-jpeg`](https://github.com/NotNinja/convert-svg/tree/master/packages/convert-svg-to-jpeg#convertinput-options)

## License
MIT (http://opensource.org/licenses/MIT)
