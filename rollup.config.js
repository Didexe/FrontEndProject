import babel from 'rollup-plugin-babel';
// import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'public/js/app.js',
  dest: 'build/js/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  globals: {
    Navigo: 'Navigo',
    router: 'router',
    Handlebars: 'Handlebars',
    firebase: 'firease',
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
