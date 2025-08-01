
export default function Home() {

  const mockVideo = {
    "id": "video_uuid",
    "title": "Building a Startup from Scratch: My Journey to $1M ARR",
    "description": "In this video, I share my complete journey...",
    "creator_name": "TechFounder",
    "creator_id": "creator_uuid",
    "tags": ["startup", "entrepreneurship", "business", "saas"],
    "category": "Business",
    "duration": 1695,
    "view_count": 234567,
    "like_count": 12534,
    "upload_timestamp": 1704067200,
    "thumbnail_url": "https://...",
    "video_url": "https://...",
    "is_verified_creator": true,
    "language": "en"
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-7" >
        video
      </div>
    </>
  )
}
