import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import svgr from '@svgr/rollup';
import scss from 'rollup-plugin-scss';

import pkg from './package.json';

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
  plugins: [
    external(),
    postcss({
      modules: false,
      extract: true,
      minimize: true,
      sourceMap: true,
      plugins: [],
    }),
    url(),
    svgr(),
    resolve(),
    scss({
      include: ['./src/assets/styles/main.scss'],
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs(),
  ],
};
