import {expect} from 'chai'
import ignoreIf, {noOp} from '../ignore-if'
import {pipe} from 'ramda'

describe('ignore-if', () => {

  describe('noOp', () => {

    it('operates as a passthrough for whatever it wraps', () => {
      const wrapped = () => {}
      const result = noOp(wrapped)
      expect(result).to.equal(wrapped)
    })

  })

  describe('ignoreIf()', () => {
    it('returns a no-op wrapper if the condition is met', () => {
      const wrapper = () => {}
      const condition = true

      const result = ignoreIf(condition, wrapper)

      expect(result).to.equal(noOp)
    })

    it('returns the given wrapper if the condition is not met', () => {
      const wrapper = () => {}
      const condition = false

      const result = ignoreIf(condition, wrapper)

      expect(result).to.equal(wrapper)
    })

    it('works within a ramda pipe', () => {
      class MyComponent {
        render() {}
      }
      class WrapperComponent {
        render() {}
      }
      const wrapper = () => WrapperComponent
      const condition = true

      const result = pipe(
        ignoreIf(condition, wrapper)
      )(MyComponent)

      expect(result).to.equal(MyComponent)
    })

    it('works within a ramda pipe when the condition is false', () => {
      class MyComponent {
        render() {}
      }
      class WrapperComponent {
        render() {}
      }
      const wrapper = () => WrapperComponent
      const condition = false

      const result = pipe(
        ignoreIf(condition, wrapper)
      )(MyComponent)

      expect(result).to.equal(WrapperComponent)
    })

    it('automatically curries if needed', () => {
      const wrapper = () => {}
      const ignoreIfTrue = ignoreIf(true)

      const result = ignoreIfTrue(wrapper)

      expect(result).to.equal(noOp)
    })

    it('allows the condition to be a function', () => {
      const wrapper = () => {}
      let condition = () => true

      let result = ignoreIf(condition, wrapper)

      expect(result).to.equal(noOp)

      condition = () => false

      result = ignoreIf(condition, wrapper)

      expect(result).to.equal(wrapper)
    })
  })

})
