'use client'
import { daysAgo } from '@/lib/utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function VideoDetailHeader({ title, createdAt, userImg, username, videoId, ownerId, visibility, thumbnailUrl, id }: VideoDetailHeaderProps) {
        const [copied, setCopied] = useState(false)
        const router = useRouter()
        const handleCopyLink = () => {
                navigator.clipboard.writeText(`${window.location.origin}/video/${id}`)
                setCopied(true)
        }
        useEffect(() => {
                const changeChecked = setTimeout(() => {
                        if (copied) {
                                setCopied(false)
                        }
                }, 2000)
                return () => {
                        clearTimeout(changeChecked)
                }
        }, [copied])
        return (
                <header className='detail-header'>
                        <aside className='user-info'>
                                <h1>{title}</h1>
                                <figure>
                                        <button onClick={() => router.push('/profile/' + ownerId)}>
                                                <Image
                                                        src={userImg || ''}
                                                        alt='User'
                                                        width={24}
                                                        height={24}
                                                        className='rounded-full'
                                                />
                                                <h2>{username}</h2>
                                        </button>
                                        <figcaption>
                                                <span className='mx-2'>&#9679;</span>
                                                <p>{daysAgo(createdAt)}</p>
                                        </figcaption>
                                </figure>
                        </aside>
                        <aside>
                                <button>
                                        <Image
                                                src={copied ? '/assets/images/checked.png' : '/assets/icons/link.svg'}
                                                alt='copy link'
                                                height={24}
                                                width={24}
                                                onClick={handleCopyLink}
                                        />
                                </button>
                        </aside>
                </header>
        )
}
