import { bundle, browserslistToTargets } from 'lightningcss'
import browserslist from 'browserslist'

import { writeFileSync, mkdirSync } from 'node:fs'

const targets = browserslistToTargets(browserslist('baseline 2024'))
const sourceMap = true

let { code: minCode, map: minMap } = bundle({
  filename: './src/index.css',
  minify: true,
  targets,
  sourceMap,
})

let { code, map } = bundle({
  filename: './src/index.css',
  minify: false,
  targets,
  sourceMap,
})

mkdirSync('./dist', { recursive: true })

writeFileSync('./dist/index.min.css', minCode)
writeFileSync('./dist/index.min.css.map', minMap)

writeFileSync('./dist/index.css', code)
writeFileSync('./dist/index.css.map', map)