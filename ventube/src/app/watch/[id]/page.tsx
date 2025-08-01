import { VideoDetail } from "@/components/common/VideoDetail/VideoDetail";
import { VideoPlayer } from "@/components/common/VideoPlayer/VideoPlayer";
import { VIDEOS } from "@/static/video";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

  const videoId = (await params).id; // Assuming the first slug is the video ID or identifier

  const video = VIDEOS.find(video => video.id === videoId);

  if (video === undefined) return notFound();

  console.log(video);

  return (
    <>
      <div className="flex col justify-center" >
        <div className="max-w-280 w-full" >
          <VideoPlayer />
          <VideoDetail {...video} />
        </div>
      </div>
    </>
  )
}
