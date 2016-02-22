[![Build Status](https://travis-ci.org/ilyavf/steal-coffee.svg?branch=master)](https://travis-ci.org/ilyavf/steal-coffee)
[![npm version](https://badge.fury.io/js/steal-coffee.svg)](http://badge.fury.io/js/steal-coffee)

# steal-coffee

A Steal plugin for CoffeeScript.

Steal ([StealJS](http://stealjs.com/)) is a module loader that supports different formats (ES6, CommonJS, AMD). You can even use **a combination
of multiple formats!** Steal will figure it out for you.

Steal can also import CSS/LESS/SASS files right into your application. With _steal-coffee_ plugin you can write
your JavaScript modules in CoffeeScript and then load them into your application with Steal.

## Install

```cmd
npm install steal-coffee --save
```

## Use

After you've installed the plugin you can just start using it directly.

### Coffee app:

Index.html:
```html
<script src="../node_modules/steal/steal.js" data-main="src/app.coffee!"></script>
```

app.coffee
```coffee
math = require 'test/math.coffee!'  # bang in the end tells Steal that it should use
                                    # steal-coffee plugin to load this script

console.log 'square of 2 is ', math.square 2
```

### ES6 app with CoffeeScript modules

app.js (ES6):
```js
import math from 'mathModule.coffee!';
```

mathModule.coffee:
```coffeescript
square = (x) -> x * x

math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x

module.exports = math;
```

## License

MIT