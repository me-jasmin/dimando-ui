// @ts-nocheck

import startDevServer from '@cypress/webpack-dev-server';
import webpackCypressConfig from '../webpack.config';

module.exports = (on, config) => {
    if (config.testingType === 'component') {
        on('dev-server:start', startDevServer(webpackCypressConfig));
    }
};
