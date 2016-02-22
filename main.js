var CoffeeScript = require('coffee-script-browser/index');

exports.translate = function(load) {
  return CoffeeScript.compile(load.source);
};

exports.buildType = "coffee";
exports.includeInBuild = true;