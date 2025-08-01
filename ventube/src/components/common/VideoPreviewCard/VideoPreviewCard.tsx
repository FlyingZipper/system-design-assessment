import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ROUTES } from '@/routes';
import { formatNumber } from '@/utils/formatNumber';
import { Play } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
    id: string;
    title: string;
    description: string;
    creatorName: string;
    creatorId: string;
    tags: string[];
    category: string;
    duration: number; // in seconds
    viewCount: number;
    likeCount: number;
    uploadTimestamp: number; // Unix timestamp
    thumbnailUrl: string;
    videoUrl: string;
    isVerifiedCreator: boolean;
    language: string; // ISO language code (e.g., "en", "es", "fr")
}

export const VideoPreviewCard: FC<Props> = ({ id, duration, title, description, viewCount, likeCount }) => {

    const formatDuration = (duration: number): string => {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    const truncateText = (text: string): string => text.substring(0, 200) + '...';

    return (
        <Link href={ROUTES.videoWatch.url(id)} >
            <Card className='group cursor-pointer' >
                <CardContent className='relative transition-colors duration-200 w-full h-56 bg-gray-800 group-hover:bg-gray-900' >
                    <div className='opacity-0 transition-opacity group-hover:opacity-100 duration-200' >
                        <Play className='absolute text-white size-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
                        <Badge className='absolute bottom-2 right-2' variant={'outline'} >
                            {formatDuration(duration)}
                        </Badge>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle className='font-normal text-lg mb-1' >{title}</CardTitle>
                    <CardDescription>{truncateText(description)}</CardDescription>
                    <div className='text-xs' >
                        <span>{`${formatNumber(viewCount)} views - ${(formatNumber(likeCount))} likes`}</span>
                    </div>
                </CardHeader>
            </Card>
        </Link>
    )
}
