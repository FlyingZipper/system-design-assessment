import { VideoDetail } from "@/components/common/VideoDetail/VideoDetail";
import { VideoPlayer } from "@/components/common/VideoPlayer/VideoPlayer";
import { VIDEOS } from "@/static/video";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {

  const videoId = (await params).id; // Assuming the first slug is the video ID or identifier

  const video = VIDEOS.find(video => video.id === videoId);

  if (video === undefined) return notFound();

  console.log(video);

  return (
    <>
      <div className="flex col justify-center" >
        <div className="w-280" >
          <VideoPlayer />
          <VideoDetail {...video} />
        </div>
      </div>
    </>
  )
}
