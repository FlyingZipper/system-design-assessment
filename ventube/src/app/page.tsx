import { VideoPreviewCard } from "@/components/common/VideoPreviewCard/VideoPreviewCard";
import { VIDEOS } from "@/static/video";

export default function Home() {

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-7" >
        {VIDEOS.map((video, index) => (
          <VideoPreviewCard
            key={index}
            {...video}
          />
        ))}
      </div>
    </>
  )
}
