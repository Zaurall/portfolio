import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/comic.ts',
    output: {
        file: 'dist/bundle.js',
    },
    plugins: [
        typescript(),
        nodeResolve({ 
            browser: true,
        }),
        terser(),
        commonjs(),
    ],
    external: ['node-modules/moment'],
};