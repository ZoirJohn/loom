import Header from '@/components/Header'

export default async function Profile({ params }: ParamsWithSearch) {
        const { id } = await params
        return (
                <div className='wrapper page'>
                        <Header
                                subHeader='suppport@yopmail.com'
                                title='Yopmail'
                                userImg='/assets/images/dummy.jpg'
                        />
                        {/* <h1 className='text-2xl font-karla'>USER ID: {id}</h1> */}
                </div>
        )
}
