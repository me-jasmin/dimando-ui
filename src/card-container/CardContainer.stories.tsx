import type { Meta, StoryObj } from '@storybook/react';

import CardContainer from './CardContainer';

const meta: Meta<typeof CardContainer> = {
    title: 'Atoms/Card container',
    component: CardContainer,
    tags: ['autodocs'],
    args: {
        children: 'Container content',
    },
    argTypes: {
        children: {
            table: {
                type: { summary: 'ReactNode' },
            },
            description: 'Nested content',
            control: { type: 'object' },
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

const Default: StoryObj<typeof CardContainer> = {
    name: 'CardContainer',
};

export default meta;
export { Default };
