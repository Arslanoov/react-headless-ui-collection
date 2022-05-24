import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import svgr from '@svgr/rollup';
import scss from 'rollup-plugin-scss';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  external: ['react'],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
      dedupe: ['react', 'react-dom'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    babel({
      presets: ['@babel/preset-react'],
    }),
    scss({
      prefix: '@import "./src/assets/styles/main.scss";',
    }),
    css({
      output: 'bundle.css',
    }),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
      plugins: [autoprefixer()],
    }),
    terser(),
    url(),
    svgr(),
    commonjs(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
  ],
};
