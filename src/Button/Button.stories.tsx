import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        appearance: 'primary',
        size: 'md',
        children: 'Button label',
        isDarkMode: false,
    },
    argTypes: {
        isDarkMode: {
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
            type: 'boolean',
            description: 'Dark mode',
            options: [true, false],
            control: { control: 'boolean' },
        },
        appearance: {
            table: {
                defaultValue: { summary: 'primary' },
                type: { summary: 'primary | secondary | ghost' },
            },
            type: 'string',
            description: 'A button can have different appearances',
            options: ['primary', 'secondary', 'ghost'],
            control: { type: 'select' },
        },
        shape: {
            table: {
                defaultValue: { summary: 'default' },
                type: { summary: 'default | rounded | pill' },
            },
            type: 'string',
            description: 'A button can have different shapes',
            options: ['default', 'rounded', 'pill'],
            control: { type: 'select' },
        },
        children: {
            table: {
                type: { summary: 'ReactNode' },
            },
            description: 'Button label text',
            control: { type: 'text' },
        },
        className: {
            table: {
                defaultValue: { summary: '' },
                type: { summary: 'string' },
            },
            type: 'string',
            description: 'Add CSS classes to button',
            control: { type: 'text' },
        },
        size: {
            table: {
                defaultValue: { summary: 'md' },
                type: { summary: 'lg | md | sm' },
            },
            type: 'string',
            description: 'A button can have different sizes',
            options: ['lg', 'md', 'sm'],
            control: { type: 'select' },
        },
        onClick: {
            table: {
                defaultValue: { summary: '(() => void)' },
                type: { summary: 'function' },
            },
            type: 'function',
            description: 'Function called on click',
            action: 'clicked',
            // eslint-disable-next-line no-console
            onEmit: () => console.log('Clicked!'),
        },
    },
};

export default meta;

export const Default: StoryObj<typeof Button> = {
    name: 'Button',
};
