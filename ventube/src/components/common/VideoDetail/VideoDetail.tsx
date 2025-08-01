import { formatNumber } from '@/utils/formatNumber';
import { FC } from 'react';

type Props = {
    title: string;
    description: string;
    likeCount: number;
    viewCount: number;
}

export const VideoDetail: FC<Props> = ({
    title,
    description,
    likeCount,
    viewCount
}) => {

    return (
        <div className='text-white py-4 space-y-3' >
            <div className='flex justify-between' >
                <h1 className='text-3xl' >{title}</h1>
                <p className='text-sm' >{`${formatNumber(viewCount)} views - ${(formatNumber(likeCount))} likes`}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}
