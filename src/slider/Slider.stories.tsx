import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Slider from './Slider';

const meta: Meta<typeof Slider> = {
    title: 'Atoms/Slider ',
    component: Slider,
    tags: ['autodocs'],
    args: {
        children: [
            <img key="1" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="2" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="3" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="4" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="5" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="6" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="7" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="8" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="9" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="10" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="11" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="12" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="13" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="14" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
            <img key="15" src="https://placehold.co/600x400?text=Hello+World" alt="" />,
        ],
    },
};

const Default: StoryObj<typeof Slider> = {
    name: 'Slider',
};

export { Default };
export default meta;
