import {expect} from 'chai'
import ignoreIf, {noOp} from '../ignore-if'

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
  })

})
