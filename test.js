import assert from 'assert'
import convertsvg from '.'

it('throws', () => assert.throws(() => convertsvg('.invalidExtension')))

describe('', () => {
  const test = (ext) => () => assert(typeof convertsvg(ext).processor === 'function')
  it('.jpg', test('.jpg'))
  it('.jpeg', test('.jpeg'))
  it('.png', test('.png'))
})