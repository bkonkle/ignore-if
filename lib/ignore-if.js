"use strict";

exports.__esModule = true;
exports.default = ignoreIf;
var noOp = exports.noOp = function noOp(wrapped) {
  return wrapped;
};

function ignoreIf(condition, wrapper) {
  if (condition) {
    return noOp;
  }
  return wrapper;
}

//# sourceMappingURL=ignore-if.js.map