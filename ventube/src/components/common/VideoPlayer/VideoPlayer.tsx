export const VideoPlayer = () => {
    return (
        <div className="w-280" >
            <video controls className='w-full h-auto' autoPlay loop >
                <source src="/assets/video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
