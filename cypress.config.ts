// @ts-nocheck

import { defineConfig } from 'cypress';
import wp from '@cypress/webpack-preprocessor';
import webpackCypressConfig from './cypress/webpack.config';

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
            webpackConfig: webpackCypressConfig,
        },
    },

    e2e: {
        supportFile: 'cypress/support/e2e.ts',
        setupNodeEvents(on, config) {
            on(
                'file:preprocessor',
                wp({
                    webpackOptions: webpackCypressConfig,
                })
            );

            return config;
        },
    },
});
