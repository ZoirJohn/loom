'use client'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'

export default function Navbar() {
        const router = useRouter()
        const { data: session } = authClient.useSession()
        const user = session?.user
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
                                                <button onClick={() => router.push('/profile/' + user.id)}>
                                                        <Image
                                                                src={user.image || '/assets/icons/user.svg'}
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
