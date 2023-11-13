import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/**/*.mdx', '../src/**/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    include: [path.resolve(__dirname, '../src')],
                },
                loaderOptions: {
                    prettierConfig: { printWidth: 80, singleQuote: false },
                },
            },
        },
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};

export default config;
