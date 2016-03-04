QUnit = require 'steal-qunit'
math  = require 'test/math.coffee!'

QUnit.module 'Steal CoffeeScript'

QUnit.test 'Load CoffeeScript module', (assert) ->

  actual = math.square 2

  console.log 'square of 2 is ', actual

  assert.equal actual, 4, 'Square of 2 should be 4'

