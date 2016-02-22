import QUnit from 'steal-qunit';
import math from './math.coffee!';


QUnit.module('Steal CoffeeScript');

QUnit.test('Load CoffeeScript module', function(assert) {
  window.math = math;
  console.log('math',math);
  assert.equal(math.square(2), 4, 'Square of 2 should be 4');
});
