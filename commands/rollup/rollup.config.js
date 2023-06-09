import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const name = 'rollup';

const plugins = [
  nodeResolve(),
  typescript(),
  commonjs(),
  json(),
];

export default {
  input: ['src/index.ts'],
  output: [
    {
      inlineDynamicImports: true,
      name: name,
      file: 'dist/rollup.cjs',
      format: 'umd'
    },
    {
      inlineDynamicImports: true,
      name: name,
      file: 'dist/rollup.js',
      format: 'es'
    },
  ],
  plugins: plugins,
};
