import VideoDetailHeader from '@/components/VideoDetailHeadet'
import VideoPlayer from '@/components/VideoPlayer'
import { getVideoById } from '@/lib/actions/videos'
import { redirect } from 'next/navigation'

export default async function Page({ params }: Params) {
        const { videoId } = await params

        const { user, video } = await getVideoById(videoId)
        if (!video) redirect('/404')

        return (
                <main className='wrapper page'>
                        <VideoDetailHeader
                                {...video}
                                id={video.id}
                                userImg={user?.image}
                                username={user?.name}
                                ownerId={video?.userId}
                        />

                        <section className='video-details'>
                                <div className='content'>
                                        <VideoPlayer videoId={video.videoId} />
                                </div>
                        </section>
                </main>
        )
}
