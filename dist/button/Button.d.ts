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
declare const Button: FC<ButtonProps>;
export default Button;
