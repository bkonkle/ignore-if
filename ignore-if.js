export const noOp = wrapped => wrapped

export default function ignoreIf(condition, wrapper) {
  const ignore = wrapperFunc => condition ? noOp : wrapperFunc
  return wrapper ? ignore(wrapper) : ignore
}
