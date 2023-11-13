import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import terser from "@rollup/plugin-terser";
import generatePackageJson from 'rollup-plugin-generate-package-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import fs from 'fs';

import rootPackages from './package.json';

const componentFolders = fs.readdirSync('./src').filter(name => name !== 'index.ts');

const sharedPlugins = [
    peerDepsExternal(),
    replace({
        preventAssignment: true,
        __IS_DEV__: process.env.NODE_ENV === 'development',
    }),
    resolve(),
    commonjs(),
    typescript({
        tsconfig: './tsconfig.json',
        useTsconfigDeclarationDir: true,
    }),
    terser(),
];

const componentConfig = componentFolders.map(folder => ({
    input: `src/${folder}/index.ts`,
    output: [
        {
            file: `dist/${folder}/${rootPackages.module}`,
            exports: 'named',
            format: 'esm',
        },
        {
            file: `dist/${folder}/${rootPackages.main}`,
            exports: 'named',
            format: 'cjs',
        },
    ],
    plugins: [
        ...sharedPlugins,
        generatePackageJson({
            baseContents: {
                name: `@${rootPackages.name}/${folder}`,
                private: true,
                main: `./${rootPackages.main}`,
                module: `./${rootPackages.module}`,
                types: `./${rootPackages.types}`,
                peerDependencies: rootPackages.peerDependencies,
            },
            outputFolder: `dist/${folder}/`,
        }),
        copy({
            targets: [{ src: [`src/${folder}/${folder}.stories.tsx`, `src/${folder}/${folder}.styles.scss`], dest: `dist/${folder}` }],
        }),
    ],
    external: ['node_modules', 'react', 'react-dom'],
}));

export default [
    ...componentConfig,
    {
        input: 'src/index.ts',
        output: [
            {
                file: `dist/${rootPackages.module}`,
                exports: 'named',
                format: 'esm',
            },
            {
                file: `dist/${rootPackages.main}`,
                exports: 'named',
                format: 'cjs',
            },
        ],
        plugins: [
            ...sharedPlugins,
            copy({
                targets: [{ src: './package.json', dest: 'dist/' }],
            }),
        ],
        external: ['node_modules', 'react', 'react-dom', /\.(css|less|scss)$/],
    },
];
