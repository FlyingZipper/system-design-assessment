export const VideoPlayer = () => {
    return (

        <video controls className='w-full h-auto' autoPlay loop >
            <source src="/assets/video.mp4" type="video/mp4" />
        </video>
    )
}
