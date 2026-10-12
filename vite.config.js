import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
import { defineConfig } from 'vite'

const jsx = { importSource: 'jsx-dom' }

export default defineConfig({
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('baseline 2024')),
    },
  },
  oxc: { jsx },
  optimizeDeps: { rolldownOptions: { transform: { jsx } } },
})
