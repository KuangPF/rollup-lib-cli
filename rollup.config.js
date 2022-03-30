import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import nodeBuiltins from 'rollup-plugin-node-builtins'

const basePlugins = [
  nodeResolve({
    preferBuiltins: true,
    mainFields: ['browser', 'jsnext','module', 'main']
  }),
  nodeBuiltins(),
  commonjs(),
  babel({
    presets:[['@babel/preset-env']],
    exclude:; 'node_modules/**',
    babelHelpers: 'bundled'
  })
]

const developmentPlugin = basePlugins
const productionPlugins = basePlugins.concat(terser())

export default {
  input: 'src/index',
  output:[
    {
      file: 'dist/index.es.js',
      format: 'es'
    },{
      file:'dist/index.js',
      format: 'umd',
      name: 'RollupCli'
    },
  ],
  plugins: process.env.NODE_ENV === 'development'? developmentPlugin: productionPlugins
}
















