export const noOp = wrapped => wrapped

export default function ignoreIf(condition, wrapper) {
  if (condition) {
    return noOp
  }
  return wrapper
}
