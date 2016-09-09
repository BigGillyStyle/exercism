"use strict";
Object.defineProperties(module.exports, {
  __esModule: {value: true},
  default: {
    enumerable: true,
    get: function() {
      return $__default;
    }
  }
});
var HelloWorld = $traceurRuntime.initTailRecursiveFunction(function() {
  return $traceurRuntime.call(function() {
    function HelloWorld() {}
    return $traceurRuntime.continuation($traceurRuntime.createClass, $traceurRuntime, [HelloWorld, {hello: function(name) {
        return ("Hello, " + (name || 'World') + "!");
      }}, {}]);
  }, this, arguments);
})();
var $__default = HelloWorld;
