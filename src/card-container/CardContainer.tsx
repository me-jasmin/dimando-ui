import React, { FC, ElementType, ReactNode } from 'react';
import classNames from 'classnames';

export interface CardContainerProps {
    children: ReactNode;
    as?: ElementType;
    href?: string;
    onClick?: () => void;
    className?: string;
}

const CardContainer: FC<CardContainerProps> = ({ children, as = 'div', className, ...rest }) => {
    const Component = as;

    return (
        <Component className={classNames('di-card-container', className)} {...rest}>
            {children}
        </Component>
    );
};

export default CardContainer;
