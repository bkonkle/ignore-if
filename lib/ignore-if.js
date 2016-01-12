'use strict';

exports.__esModule = true;
exports.default = ignoreIf;
var noOp = exports.noOp = function noOp(wrapped) {
  return wrapped;
};

function ignoreIf(condition, wrapper) {
  var shouldIgnore = undefined;

  if (typeof condition === 'function') {
    shouldIgnore = condition();
  } else {
    shouldIgnore = condition;
  }

  var ignore = function ignore(wrapperFunc) {
    return shouldIgnore ? noOp : wrapperFunc;
  };
  return wrapper ? ignore(wrapper) : ignore;
}

//# sourceMappingURL=ignore-if.js.map