export const noOp = wrapped => wrapped

export default function ignoreIf(condition, wrapper) {
  let shouldIgnore

  if (typeof condition === 'function') {
    shouldIgnore = condition()
  } else {
    shouldIgnore = condition
  }

  const ignore = wrapperFunc => shouldIgnore ? noOp : wrapperFunc
  return wrapper ? ignore(wrapper) : ignore
}
