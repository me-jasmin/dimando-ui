import React, { FC, ElementType, ReactNode } from 'react';
import classNames from 'classnames';

// custom components
import CardContainer from '../card-container';

export interface CardProps {
    children: ReactNode;
    title?: string;
    image?: string;
    href?: string;
    onClick?: () => void;
    as?: ElementType;
    className?: string;
}

const Card: FC<CardProps> = ({ children, title, image, href, onClick, as, className, ...rest }) => {
    return (
        <CardContainer className={classNames('di-card', className)} as={as} href={href} onClick={onClick} {...rest}>
            <div className="di-card-wrapper">
                <img className="di-card-image" src={image} alt={title} />
                {(title || children) && (
                    <div className="di-card-content">
                        {title && <div className="di-card-title">{title}</div>}
                        {typeof children === 'string' ? <p>{children}</p> : children}
                    </div>
                )}
            </div>
        </CardContainer>
    );
};

export default Card;
