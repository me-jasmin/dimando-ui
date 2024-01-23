import React from 'react';

import Button from './Button';
import './button.styles.scss';

describe('<Button />', () => {
    it('renders', () => {
        cy.mount(
            <Button appearance="solid" size="md">
                Button test
            </Button>
        );
        cy.get('.di-button').should('exist').should('have.class', 'di-button--md').should('have.class', 'di-button--solid').should('have.text', 'Button test');
    });
});
