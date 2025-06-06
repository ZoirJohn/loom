import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants'

export default async function Profile({ params }: ParamsWithSearch) {
        const { id } = await params
        return (
                <div className='wrapper page'>
                        <Header
                                subHeader='suppport@yopmail.com'
                                title='Yopmail'
                                userImg='/assets/images/dummy.jpg'
                        />
                        <section className='video-grid'>
                                {dummyCards.map((card) => (
                                        <VideoCard
                                                {...card}
                                                key={card.id}
                                        />
                                ))}
                        </section>
                </div>
        )
}
