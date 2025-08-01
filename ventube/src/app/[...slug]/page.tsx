
import { VideoPreviewCard } from "@/components/common/VideoPreviewCard/VideoPreviewCard";
import { VIDEOS } from "@/static/video";


export default async function Page({ params, searchParams }: { params: Promise<{ slug: string, }>, searchParams: Promise<{ search_query?: string }> }) {

  let pagetitle = (await params).slug.split('-').join(' ');

  if (pagetitle === 'results') {
    pagetitle = `Search results for: ${(await searchParams).search_query || ''}`
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-white capitalize">{pagetitle}</h1>
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
