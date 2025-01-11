import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js', // Changed this to point to index.js
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    postcss({
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top'
      }
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react']
    }),
    resolve(),
    commonjs(),
    terser()
  ],
  external: ['react', 'react-dom', 'react-markdown']
};