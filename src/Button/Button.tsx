import React, { type FC, type MouseEventHandler } from 'react';

import './button.styles.scss';

export interface ButtonProps {
    label: string;
    size?: 'lg' | 'md' | 'sm';
    btnType?: 'primary' | 'secondary' | 'ghost';
    shape?: 'default' | 'rounded' | 'pill';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    styles?: object;
    type?: 'button' | 'submit' | 'reset';
    isDarkMode?: boolean;
}

/**
 * A Button that takes label text as a mandatory prop
 * and returns a React Button component.
 *
 * @param {string} label - text to be displayed inside the button
 * @param {string} size - `"lg" | "md" | "sm"`
 * @param {string} type - normal html button types - `"button" | "submit" | "reset"`
 * @param {string} btnType - `"primary" | "secondary" | "ghost"`
 * @param {string} className - additional class to be applied
 * @func onClick - function of MouseEventHandler type, returns void
 * @param {string} shape - - "default" | "rounded" | "pill"
 * @param {object} styles - inline styles to be applied
 * @param {boolean} isDarkMode - default `false`
 * @returns Button
 */
 
const Button: FC<ButtonProps> = ({ label, size = 'md', type = 'button', btnType = 'primary', className, onClick, shape = 'default', styles, isDarkMode = false }) => {
    return (
        <button type={type} className={`button ${size} ${btnType} ${shape} ${isDarkMode === true && `dark`} ${className}`} style={styles} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
