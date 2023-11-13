import { FC } from 'react';

export interface AlertProps {
    message: string;
    type?: 'default' | 'success' | 'warn' | 'error';
    styles?: object;
}

const Alert: FC<AlertProps> = ({ message, type = 'default', styles }) => {
    return (
        <div className={`container`}>
            <div className={`alert ${type}`} style={styles}>
                {message}
            </div>
        </div>
    );
};

export default Alert;
