var CoffeeScript = require('coffee-script-browser/index');

exports.translate = function(load) {
  console.log('Lets translate coffee!');
  return CoffeeScript.compile(load.source);
};

exports.buildType = "coffee";
exports.includeInBuild = true;