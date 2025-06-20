import { getAllVideos } from '@/lib/actions/videos'
import EmptyState from '@/components/EmptyState'
import Header from '@/components/Header'
import Pagination from '@/components/Pagination'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const Page = async ({ searchParams }: SearchParams) => {
        const { query, filter, page } = await searchParams
        const { videos, pagination } = await getAllVideos(query, filter, Number(page) || 1)
        return (
                <main className='wrapper page'>
                        <Header
                                title='All Videos'
                                subHeader='Public Library'
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
                                        description='Try adjusting your search'
                                />
                        )}
                        {pagination?.totalPages > 1 && (
                                <Pagination
                                        currentPage={pagination.currentPage}
                                        totalPages={pagination.totalPages}
                                        queryString={query}
                                        filterString={filter}
                                />
                        )}
                </main>
        )
}

export default Page
