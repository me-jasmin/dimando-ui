// @ts-nocheck

import '@testing-library/jest-dom';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button';
import { expect, test } from '@jest/globals';

const renderButton = (props: ButtonProps) => {
    return render(<Button {...props} />);
};

test('renders button component with default props', () => {
    const { getByText } = renderButton({ children: 'Click me' });
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
});

test('renders button component with custom props', () => {
    const { getByText } = renderButton({
        children: 'Submit',
        size: 'lg',
        appearance: 'secondary',
        className: 'custom-class',
    });

    const button = getByText('Submit');
    expect(button).toHaveClass('di-button di-button--lg di-button--secondary di-button--secondary custom-class');
});

test('calls onClick handler when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = renderButton({ children: 'Click me', onClick: handleClick });

    const button = getByText('Click me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
});
