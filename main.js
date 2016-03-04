//Downloaded from: https://github.com/jashkenas/coffeescript/blob/master/extras/coffee-script.js
var CoffeeScript = require('./coffee-script');

exports.translate = function(load) {

  // For CoffeeScript compile options see here:
  // http://coffeescript.org/documentation/docs/coffee-script.html
  var result = CoffeeScript.compile(load.source, {

    sourceMap: true,                      // Generate source map.
                                          // If true then returns {js, v3SourceMap, sourceMap}
                                          //    false then returns just js string.
    sourceFiles: [load.address + '!orig'],

    bare: true                            // Compile without a top-level function wrapper
  });

  // CoffeeScript generates source map in V3 spec format:
  var v3SourceMap = JSON.parse(result.v3SourceMap);

  load.source = result.js + '\n//# sourceMappingURL=' + getSourceMapBase64(v3SourceMap, load.source);
};

// CoffeeScript generates source map in V3 spec format:
// http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-anatomy
// https://github.com/jashkenas/coffeescript/blob/1.9.3/lib/coffee-script/sourcemap.js#L122
function getSourceMapBase64(sourceMap, orig){

  // Provide original code inline:
  sourceMap.sourcesContent = [orig];

  // Add offset to account on CJS wrapper:
  sourceMap.mappings = ';;' + sourceMap.mappings;

  sourceMap = JSON.stringify(sourceMap);

  return 'data:application/json;base64,' + btoa(unescape(encodeURIComponent(sourceMap)));
}

exports.buildType = "coffee";
exports.includeInBuild = true;