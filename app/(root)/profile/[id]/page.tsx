import EmptyState from '@/components/EmptyState'
import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { getAllVideosByUser } from '@/lib/actions/videos'
import { redirect } from 'next/navigation'

export default async function Profile({ params, searchParams }: ParamsWithSearch) {
        const { id } = await params
        const { query, filter } = await searchParams
        const { user, videos } = await getAllVideosByUser(id, query, filter)
        if (!user) redirect('/404')
        return (
                <main className='wrapper page'>
                        <Header
                                subHeader={user.email}
                                title={user.name}
                                userImg={user.image || ''}
                        />
                        {videos.length > 0 ? (
                                <section className='video-grid'>
                                        {videos.map(({ video, user }) => {
                                                return (
                                                        <VideoCard
                                                                {...video}
                                                                key={video.id}
                                                                thumbnail={video.thumbnailUrl}
                                                                userImg={user?.image || ''}
                                                                username={user?.name || 'Guest'}
                                                        />
                                                )
                                        })}
                                </section>
                        ) : (
                                <EmptyState
                                        icon='/assets/icons/video.svg'
                                        title='No videos found'
                                        description='Videos will show up once you upload them'
                                />
                        )}
                </main>
        )
}
