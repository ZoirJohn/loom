'use client'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'

const user = {}

export default function Navbar() {
        const router = useRouter()
        const handleSignOut = async () => {
                await authClient.signOut({ fetchOptions: { onSuccess: () => redirect('/sign-in') } })
        }
        return (
                <header className='navbar'>
                        <nav>
                                <Link href='/'>
                                        <Image
                                                src='/assets/icons/logo.svg'
                                                alt='Logo'
                                                width={32}
                                                height={32}
                                        />
                                        <h1>SnapCast</h1>
                                </Link>
                                {user && (
                                        <figure>
                                                <button onClick={() => router.push('/profile/1234')}>
                                                        <Image
                                                                src='/assets/images/dummy.jpg'
                                                                width={36}
                                                                height={36}
                                                                alt='User Avatar'
                                                                className='rounded-full aspect-square'
                                                        />
                                                </button>
                                                <button onClick={handleSignOut}>
                                                        <Image
                                                                src='/assets/icons/logout.svg'
                                                                width={24}
                                                                height={24}
                                                                alt='logout'
                                                                className='rotate-180 cursor-pointer'
                                                        />
                                                </button>
                                        </figure>
                                )}
                        </nav>
                </header>
        )
}
