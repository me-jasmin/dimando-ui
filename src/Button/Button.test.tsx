import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';

describe('Running Test for Marbella Button', () => {
    test('Check Button Disabled', () => {
        render(<Button text="Button marbella" disabled />);
        expect(screen.getByRole('button', { name: 'Button marbella' })).toBeDisabled();
    });
});
