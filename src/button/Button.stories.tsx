import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Button label',
    },
    argTypes: {
        appearance: {
            table: {
                defaultValue: { summary: 'solid' },
                type: { summary: 'solid | link | subtle | outline' },
            },
            type: 'string',
            description: 'A button can have different appearances',
            options: ['solid', 'link', 'subtle', 'outline'],
            control: { type: 'select' },
        },
        color: {
            table: {
                defaultValue: { summary: 'secondary' },
                type: { summary: 'primary | secondary | color-1 | color-2 | color-3 | color-4 | color-5 | color-6 | color-7 | color-8' },
            },
            type: 'string',
            description: 'A button can have different appearances',
            options: ['primary', 'secondary', 'color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8'],
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
        disabled: {
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
            type: 'boolean',
            description: 'A button can disabled',
            options: [true, false],
            control: { control: 'boolean' },
        },
        block: {
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' },
            },
            type: 'boolean',
            description: 'Spans the full width of the Button parent',
            options: [true, false],
            control: { type: 'boolean' },
        },
        onClick: {
            table: {
                type: { summary: 'function' },
            },
            type: 'function',
            description: 'Function called on click',
            action: 'clicked',
            // eslint-disable-next-line no-console
            onEmit: () => 'Clicked!',
        },
    },
};

export default meta;

export const Default: StoryObj<typeof Button> = {
    name: 'Button',
};
