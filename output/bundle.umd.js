(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.test = {}));
})(this, (function (exports) { 'use strict';

  var version = "1.0.0";

  var index = 42;

  var test = function test() {
    console.log("111");
  };
  function main () {
    console.log('version ' + version);
  }
  var answerFunction = function answerFunction() {
    console.log('the answer is ' + index);
  };

  exports.answerFunction = answerFunction;
  exports.default = main;
  exports.test = test;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
