# ignore-if

[![Version][version-svg]][package-url] [![Build Status][travis-svg]][travis-url] [![License][license-image]][license-url] [![Downloads][downloads-image]][downloads-url]

A higher-order function that allows you to ignore higher-order function when
a condition is met, such as `NODE_ENV === 'test'`.

## Installation

    $ npm install --save-dev ignore-if

## Usage

One use case for this is in React when you want to wrap your component in a
higher-order component, but you'd like to ignore the wrapper in testing. This
is useful for things like [react-css-modules](react-css-modules).

```jsx
import cssModules from 'react-css-modules'
import ignoreIf from 'ignore-if'
import styles from './styles.css'

class MyComponent {
  render() {
    return <div></div>
  }
}

const isTest = process.env.NODE_ENV === 'test'

export default ignoreIf(isTest, cssModules(MyComponent, styles)))
```


[travis-svg]: https://img.shields.io/travis/bkonkle/ignore-if/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/bkonkle/ignore-if
[license-image]: http://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/ignore-if.svg?style=flat-square
[downloads-url]: http://npm-stat.com/charts.html?package=ignore-if
[version-svg]: https://img.shields.io/npm/v/ignore-if.svg?style=flat-square
[package-url]: https://npmjs.org/package/ignore-if
[react-css-modules]: https://github.com/gajus/react-css-modules
