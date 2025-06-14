import type { NextConfig } from 'next'
import { hostname } from 'os'

const nextConfig: NextConfig = {
        images: {
                remotePatterns: [
                        { hostname: 'snapcast-zalem.b-cdn.net', protocol: 'https', port: '', pathname: '/**' },
                        { hostname: 'lh3.googleusercontent.com', protocol: 'https', port: '', pathname: '/**' },
                ],
        },
}

export default nextConfig
