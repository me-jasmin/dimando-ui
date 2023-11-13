import { type FC } from 'react';

export interface ContentCardProps {
    text: string;
}

const ContentCard: FC<ContentCardProps> = ({ text }) => {
    return <div className="card">{text}</div>;
};

export default ContentCard;
