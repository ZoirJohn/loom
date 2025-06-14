import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { satoshi } from '../fonts/font'

const geistKarla = Work_Sans({
        variable: '--font-geist-karla',
        subsets: ['latin'],
})

export const metadata: Metadata = {
        title: 'SnapCast',
        description: 'A Screen Sharing App',
        icons: {
                icon: '/assets/icons/logo.svg',
        },
}

export default function Layout({
        children,
}: Readonly<{
        children: React.ReactNode
}>) {
        return (
                <html lang='en'>
                        <body className={`${geistKarla.variable} ${satoshi.variable} font-karla antialiased`}>{children}</body>
                </html>
        )
}
