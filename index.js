const { format } = require('path')

const throws = (message) => { throw new Error(message) }
const asserts = (condition, message) => !condition && throws(message)
const fwa = (obj, ...addition) => format(Object.assign({}, obj, ...addition))

const ext2package = (ext) =>
  ext === '.png' ? 'convert-svg-to-png' :
  ext === '.jpg' || ext === '.jpeg' ? 'convert-svg-to-jpeg' :
  false

module.exports = (ext, opts) => {
  const packageName = ext2package(ext)
  asserts(packageName, '')
  const { convert } = require(packageName)
  const processor = (data, { out }) => convert(data, opts).then(converted => [fwa(out, { ext }), converted])
  return { processor }
}