import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';
// import pkg from './package.json'

export default [
  {
    input: './index.ts',
    output: {
      exports: 'named',
      format: 'umd',
      name: 'iconColorChangeUtil',
      dir: `dist`,
    },
    plugins: [resolve(), typescript({ tsconfig: 'tsconfig.json' }), babel(), commonjs(), uglify()],
    onwarn(warning) {
      // 跳过某些警告
      if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;

      // 抛出异常
      if (warning.code === 'NON_EXISTENT_EXPORT') throw new Error(warning.message);

      // 控制台打印一切警告
      console.warn(warning.message);
    },
  },
];
