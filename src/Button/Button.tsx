import { ReactNode, FC, MouseEventHandler } from 'react';

export interface ButtonProps {
    children: ReactNode;
    size?: 'lg' | 'md' | 'sm';
    appearance?: 'primary' | 'secondary' | 'ghost';
    shape?: 'default' | 'rounded' | 'pill';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    isDarkMode?: boolean;
}

const Button: FC<ButtonProps> = ({ children, size = 'md', appearance = 'primary', className, onClick, shape = 'default', isDarkMode = false, ...rest }) => {
    return (
        <button type="button" className={`button ${size} ${appearance} ${shape} ${isDarkMode === true && `dark`} ${className}`} onClick={onClick} {...rest}>
            {children}
        </button>
    );
};

export default Button;
