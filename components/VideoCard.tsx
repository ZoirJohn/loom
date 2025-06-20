'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useEffect, useState } from 'react'

export default function VideoCard({ id, title, thumbnail, createdAt, userImg, visibility, duration, username, views }: VideoCardProps) {
        const [copied, setCopied] = useState(false)
        const handleCopyLink = (e: MouseEvent<HTMLButtonElement>) => {
                e.preventDefault()
                navigator.clipboard.writeText(`${window.location.origin}/video/${id}`)
                setCopied(true)
        }
        useEffect(() => {
                const timeout = setTimeout(() => {
                        setCopied(false)
                }, 2000)
                return () => {
                        clearTimeout(timeout)
                }
        }, [copied])
        return (
                <Link
                        href={`/video/${id}`}
                        className='video-card'
                >
                        <Image
                                src={thumbnail}
                                alt='thumbnail'
                                width={290}
                                height={160}
                                className='thumbnail'
                        />
                        <article>
                                <div>
                                        <figure>
                                                <Image
                                                        src={userImg || '/assets/images/dummy.jpg'}
                                                        alt='avatar'
                                                        width={34}
                                                        height={34}
                                                        className='rounded-full aspect-square'
                                                />
                                                <figcaption>
                                                        <h3>{username}</h3>
                                                        <p>{visibility}</p>
                                                </figcaption>
                                        </figure>
                                        <aside>
                                                <Image
                                                        src='/assets/icons/eye.svg'
                                                        alt='views'
                                                        width={16}
                                                        height={16}
                                                />
                                                <span>{views}</span>
                                        </aside>
                                </div>
                                <h2>
                                        {title} - {createdAt.toLocaleDateString('us-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                </h2>
                        </article>
                        <button
                                onClick={handleCopyLink}
                                className='copy-btn'
                        >
                                <Image
                                        src={copied ? '/assets/images/checked.png' : '/assets/icons/link.svg'}
                                        alt='copy'
                                        width={18}
                                        height={18}
                                />
                        </button>
                        {duration ? <div className='duration'>{Math.ceil(duration / 60)} min</div> : <div className='duration'>0 min</div>}
                </Link>
        )
}
