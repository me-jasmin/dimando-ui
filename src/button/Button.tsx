import React, { ReactNode, ReactElement, forwardRef, ElementType, ForwardedRef, FC } from 'react';
import classNames from 'classnames';

export interface ButtonProps {
    children: ReactNode;
    size?: 'lg' | 'md' | 'sm';
    appearance?: 'solid' | 'link' | 'subtle' | 'outline';
    color?: 'primary' | 'secondary' | 'color-1' | 'color-2' | 'color-3' | 'color-4' | 'color-5' | 'color-6' | 'color-7' | 'color-8';
    disabled?: boolean;
    block?: boolean;
    href?: string;
    as?: ElementType;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    className?: string;
}

const Button: FC<ButtonProps> = forwardRef(
    ({ children, size = 'md', appearance = 'solid', color = 'secondary', disabled, block, href, startIcon, endIcon, as = 'button', className, onClick, ...rest }, ref: ForwardedRef<HTMLElement>) => {
        const Component = as;

        return (
            <Component
                className={classNames(
                    'di-button',
                    `di-button--${size}`,
                    `di-button--${color}`,
                    `di-button--${appearance}`,
                    {
                        'di-button--block': block,
                    },
                    className
                )}
                onClick={onClick}
                ref={ref}
                href={href}
                disabled={disabled}
                {...rest}
            >
                {startIcon ? <span className="di-button-start-icon">{startIcon}</span> : null}
                {children}
                {endIcon ? <span className="di-button-end-icon">{endIcon}</span> : null}
            </Component>
        );
    }
);

export default Button;
