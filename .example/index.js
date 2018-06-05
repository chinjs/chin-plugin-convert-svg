import convertsvg from '..'
import { join } from 'path'

const width = 100
const svg2jpg = convertsvg('.jpg', { width })
const svg2png = convertsvg('.png', { width })

export default {
  put: join(__dirname, 'put'),
  out: join(__dirname, 'out'),
  clean: true,
  processors: [
    ['jpg.svg', { svg: svg2jpg }],
    ['png.svg', { svg: svg2png }]
  ]
}