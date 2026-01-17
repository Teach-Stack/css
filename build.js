import { mkdirSync, writeFileSync } from 'node:fs'

import browserslist from 'browserslist'
import { browserslistToTargets, bundle } from 'lightningcss'

const targets = browserslistToTargets(browserslist('baseline 2024'))
const sourceMap = true

const { code: minCode, map: minMap } = bundle({
  filename: './src/styles/index.css',
  minify: true,
  targets,
  sourceMap,
})

const { code, map } = bundle({
  filename: './src/styles/index.css',
  minify: false,
  targets,
  sourceMap,
})

mkdirSync('./dist', { recursive: true })

writeFileSync('./dist/index.min.css', minCode)
writeFileSync('./dist/index.min.css.map', minMap)

writeFileSync('./dist/index.css', code)
writeFileSync('./dist/index.css.map', map)
