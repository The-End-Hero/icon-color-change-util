import { uglify } from 'rollup-plugin-uglify';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

export default [
  {
    input: './index.js',
    output: {
      exports: 'named',
      format: 'umd',
      name: 'iconColorChangeUtil',
      dir: `dist`,
    },
    plugins: [
      resolve(),
      babel(),
      commonjs(),
      uglify(),
    ],
  },
];
