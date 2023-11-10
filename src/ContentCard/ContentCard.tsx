import React, { type FC } from 'react';

import './content-card.styles.scss';
export interface ContentCardProps {
    text: string;
}

const ContentCard: FC<ContentCardProps> = ({ text }) => {
    return <div className="card">{text}</div>;
};

export default ContentCard;
