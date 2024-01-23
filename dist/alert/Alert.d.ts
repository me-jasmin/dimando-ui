import { FC } from 'react';
export interface AlertProps {
    message: string;
    type?: 'default' | 'success' | 'warn' | 'error';
    styles?: object;
}
declare const Alert: FC<AlertProps>;
export default Alert;
