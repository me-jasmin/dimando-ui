import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

import '@testing-library/jest-dom';

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
        shape: 'rounded',
        className: 'custom-class',
        isDarkMode: true,
    });

    const button = getByText('Submit');
    expect(button).toHaveClass('button lg secondary rounded dark custom-class');
});

test('calls onClick handler when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = renderButton({ children: 'Click me', onClick: handleClick });

    const button = getByText('Click me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
});
