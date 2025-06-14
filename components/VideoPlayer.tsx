import { createIframeLink } from '@/lib/utils'

export default function VideoPlayer({ videoId }: VideoPlayerProps) {
        return (
                <iframe
                        className='video-player'
                        src={createIframeLink(videoId)}
                        loading='lazy'
                        title='Video Player'
                        style={{ border: 0, zIndex: 10 }}
                        allowFullScreen
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                ></iframe>
        )
}
