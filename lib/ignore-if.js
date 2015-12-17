"use strict";

exports.__esModule = true;
exports.default = ignoreIf;
var noOp = exports.noOp = function noOp(wrapped) {
  return wrapped;
};

function ignoreIf(condition, wrapper) {
  var ignore = function ignore(wrapperFunc) {
    return condition ? noOp : wrapperFunc;
  };
  return wrapper ? ignore(wrapper) : ignore;
}

//# sourceMappingURL=ignore-if.js.map