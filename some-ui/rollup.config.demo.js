import livereload from 'rollup-plugin-livereload';
import url from '@rollup/plugin-url';
import typescript from 'rollup-plugin-typescript2';
import svgr from '@svgr/rollup';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';
import scss from 'rollup-plugin-scss';

export default {
  input: 'example/index.tsx',
  output: {
    file: 'serve/index.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true,
    }),
    babel({
      presets: ['@babel/preset-react'],
    }),
    scss(),
    commonjs(),
    url(),
    svgr(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    resolve(),
    serve({
      open: true,
      openPage: '/',
      verbose: false,
      contentBase: ['./'],
      historyApiFallback: '/example/index.html',
      host: 'localhost',
      port: 3005,
    }),
    livereload({
      watch: 'serve'
    })
  ]
};