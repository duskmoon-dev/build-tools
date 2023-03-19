import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'src/index.ts',
	output: {
    inlineDynamicImports: true,
		file: 'dist/dm-cli.cjs',
    name: 'dm-cli',
		format: 'cjs'
	},
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript(),
  ],
};
