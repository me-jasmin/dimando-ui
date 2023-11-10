import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy'
import postcss from "rollup-plugin-postcss"
import generatePackageJson from "rollup-plugin-generate-package-json";
import path from 'path';

const packageJson = require("./package.json");

const fs = require('fs');

function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

const getComponentsFolders = (entry) => {
  const dirs = fs.readdirSync(entry)
  const dirsWithoutIndex = dirs.filter(name => name !== 'index.ts')
  return dirsWithoutIndex
};

const commonPlugins = [
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
];

// Returns rollup configuration for a given component
function component(commonPlugins, folder) {
  return {
    input: `src/${folder}/index.ts`,
    output: [
      {
        file: `dist/${folder}/index.esm.js`,
        exports: 'named',
        format: 'esm',
      },
      {
        file: `dist/${folder}/index.cjs.js`,
        exports: 'named',
        format: 'cjs',
      }
    ],
    plugins: [
      ...commonPlugins,
      generatePackageJson({
        baseContents: {
          name: `${packageJson.name}/${folder}`,
          private: true,
          main: './index.cjs.js',
          module: './index.esm.js',
          types: './index.d.ts',
          peerDependencies: packageJson.peerDependencies,
        },
        outputFolder: `dist/${folder}/`
      }),
      postcss({
        minimize: true,
        extract: true,
        extract: path.resolve(`dist/${folder}/${toKebabCase(folder)}.styles.css`)
      }),
      copy({
        targets: [
          { src: [`src/${folder}/${folder}.stories.tsx`, `src/${folder}/${toKebabCase(folder)}.styles.scss`], dest: `dist/${folder}` },
        ]
      })
    ],
    // Don't bundle node_modules and ../utils
    //
    // We should also exclude relative imports of other components, but a trivial exclude of /\.\./ does not work
    // It may require changes to the way the components are exported
    external: [/node_modules/],
  };
}

export default [
  // Build all components in ./src/*
  ...getComponentsFolders('./src').map((folder) => component(commonPlugins, folder)),

  // Build the main file that includes all components and utils
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.esm.js',
        exports: 'named',
        format: 'esm',
      },
      {
        file: 'dist/index.cjs.js',
        exports: 'named',
        format: 'cjs',
      }
    ],
    plugins: commonPlugins,
    external: [/node_modules/],
  },
];



/*

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import postcss from "rollup-plugin-postcss"

import generatePackageJson from 'rollup-plugin-generate-package-json';
const fs = require('fs');

export const getComponentsFolders = (entry) => {
  const dirs = fs.readdirSync(entry)
  const dirsWithoutIndex = dirs.filter(name => name !== 'index.ts' && name !== 'utils')
  return dirsWithoutIndex
};

export const getFiles = (entry, extensions = [], excludeExtensions = []) => {
  let fileNames = [];
  const dirs = fs.readdirSync(entry);
  dirs.forEach((dir) => {
    const path = `${entry}/${dir}`;

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [
        ...fileNames,
        ...getFiles(path, extensions, excludeExtensions),
      ];

      return;
    }

    if (!excludeExtensions.some((exclude) => dir.endsWith(exclude))
      && extensions.some((ext) => dir.endsWith(ext))
    ) {
      fileNames.push(path);
    }
  });
  return fileNames;
};
const packageJson = require('./package.json');

const commonPlugins = [
  postcss({
    minimize: true,
    extract: true,
  }),
  replace({
    preventAssignment: true,
    __IS_DEV__: process.env.NODE_ENV === 'development',
  }),
  // resolve(),
  commonjs(),
  typescript(),
];

// Returns rollup configuration for a given component
function component(commonPlugins, folder) {
  return {
    input: `src/${folder}/index.ts`,
    output: [
      {
        file: `dist/${folder}/index.esm.js`,
        exports: 'named',
        format: 'esm',
      },
      {
        file: `dist/${folder}/index.cjs.js`,
        exports: 'named',
        format: 'cjs',
      }
    ],
    plugins: [
      ...commonPlugins,
      generatePackageJson({
        baseContents: {
          name: `${packageJson.name}/${folder}`,
          private: true,
          main: './index.cjs.js',
          module: './index.esm.js',
          types: './index.d.ts',
          peerDependencies: packageJson.peerDependencies,
        },
        outputFolder: `dist/${folder}/`
      }),
    ],
    // Don't bundle node_modules and ../utils
    //
    // We should also exclude relative imports of other components, but a trivial exclude of /\.\./ does not work
    // It may require changes to the way the components are exported
    external: [/node_modules/],
  };
}

export default [
  // Build all components in ./src/*
  ...getComponentsFolders('./src').map((folder) => component(commonPlugins, folder)),

  // Build the main file that includes all components and utils
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.esm.js',
        exports: 'named',
        format: 'esm',
      },
      {
        file: 'dist/index.cjs.js',
        exports: 'named',
        format: 'cjs',
      }
    ],
    plugins: commonPlugins,
    external: [/node_modules/],
  },
];
*/