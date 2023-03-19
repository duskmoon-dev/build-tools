import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
	input: ['src/index.ts'],
	output: {
    inlineDynamicImports: true,
		file: 'dist/dm-cli.cjs',
    name: 'dm-cli',
		format: 'cjs'
	},
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    typescript(),
    commonjs(),
    json(),
  ],
};
