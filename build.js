import { bundle, browserslistToTargets } from 'lightningcss'
import browserslist from 'browserslist'

import { writeFileSync, mkdirSync } from 'node:fs'


let { code: minCode, map: minMap } = bundle({
  filename: './src/index.css',
  minify: true,
  targets: browserslistToTargets(browserslist('baseline 2024')),
  sourceMap: true,
})

let { code, map } = bundle({
  filename: './src/index.css',
  minify: false,
  targets: browserslistToTargets(browserslist('baseline 2024')),
  sourceMap: true,
})

mkdirSync('./dist', { recursive: true })

writeFileSync('./dist/index.min.css', minCode)
writeFileSync('./dist/index.min.css.map', minMap)

writeFileSync('./dist/index.css', code)
writeFileSync('./dist/index.css.map', map)