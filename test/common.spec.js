import assert from 'assert'
import { add } from '../src/index.js'

describe('common: add', function () {
  it('params addition', function () {
    assert.strictEqual(add(1, 2, 3), 6)
  })
})
