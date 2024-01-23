import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta: Meta<typeof Card> = {
    title: 'Atoms/Card ',
    component: Card,
    tags: ['autodocs'],
    args: {
        title: 'Card title',
        image: 'http://via.placeholder.com/640x360',
        as: 'a',
        children: 'String',
    },
    argTypes: {
        title: {
            table: {
                type: { summary: 'string' },
            },
            type: 'string',
            description: 'Card title',
            control: { type: 'text' },
        },
        image: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'http://via.placeholder.com/640x360' },
            },
            type: 'string',
            description: 'Custom CSS classes',
            control: { type: 'text' },
        },
        href: {
            table: {
                type: { summary: 'string' },
            },
            type: 'string',
            description: 'Custom CSS classes',
            control: { type: 'text' },
        },
        onClick: {
            table: {
                type: { summary: 'function' },
            },
            type: 'function',
            description: 'Function called on click',
            action: 'clicked',
            onEmit: () => 'Clicked!',
        },
        as: {
            table: {
                type: { summary: 'string' },
            },
            type: 'string',
            description: 'HTML element',
            control: { type: 'text' },
        },
        children: {
            table: {
                type: { summary: 'ReactNode' },
            },
            description: 'Nested content',
            control: {
                type: 'select',
            },
            options: ['String', 'JSX'],
            mapping: {
                String: 'Nam nec consectetur est. Fusce nec blandit libero. Etiam et nisl libero. Curabitur nec erat nisi. Maecenas et finibus justo. Nullam a erat non nisl sodales fermentum.',
                JSX: (
                    <>
                        <p>Nam nec consectetur est. Fusce nec blandit libero. Etiam et nisl libero. Curabitur nec erat nisi. Maecenas et finibus justo. Nullam a erat non nisl sodales fermentum.</p>
                        <p>Curabitur nec erat nisi. Maecenas et finibus justo. Nullam a erat non nisl sodales fermentum.</p>
                    </>
                ),
            },
        },
        className: {
            table: {
                type: { summary: 'string' },
            },
            type: 'string',
            description: 'Custom CSS classes',
            control: { type: 'text' },
        },
    },
};

const Default: StoryObj<typeof Card> = {
    name: 'Card',
};

export { Default };
export default meta;
