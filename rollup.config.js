import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'index.js',
  plugins: [
    babel({
      presets: ['es2015-rollup'],
      exclude: 'node_modules/**',
    }),
    process.env.BUILD === 'production' ? uglify() : null,
  ].filter(p => !!p),
  format: 'umd',
  moduleName: 'isEmailMaybe',
  sourceMap: true,
  banner: `/**
 * @name isEmailMaybe
 * @license MIT
 * @copyright (c) 2016 Kent C. Dodds
 * @author Kent C. Dodds <kent@doddsfamily.us> (kentcdodds.com)
 */`,
}
