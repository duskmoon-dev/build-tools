import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { wasm } from '@rollup/plugin-wasm';

const name = process.env.BUNDLE_NAME || 'bundle';

const plugins = [
  nodeResolve(),
  typescript(),
  commonjs(),
  json(),
  wasm(),
];

export default {
  input: ['src/index.ts'],
  output: [
    {
      inlineDynamicImports: true,
      dir: 'dist',
      name: name,
      format: 'cjs'
    },
    {
      inlineDynamicImports: true,
      dir: 'dist',
      name: name,
      format: 'es'
    },
  ],
  plugins: plugins,
};
