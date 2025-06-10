export const MAX_VIDEO_SIZE = 500 * 1024 * 1024
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024

export const BUNNY = {
        STREAM_BASE_URL: 'https://video.bunnycdn.com/library',
        STORAGE_BASE_URL: 'https://storage.bunnycdn.com/snapcast-zalem',
        CDN_URL: 'https://snapcast-zalem.b-cdn.net',
        EMBED_URL: 'https://iframe.mediadelivery.net/embed',
        TRANSCRIPT_URL: 'https://vz-55bea644-3e7.b-cdn.net',
}

export const emojis = ['😂', '😍', '👍']

export const filterOptions = ['Most Viewed', 'Most Recent', 'Oldest First', 'Least Viewed']

export const visibilities: Visibility[] = ['public', 'private']

export const ICONS = {
        record: '/assets/icons/record.svg',
        close: '/assets/icons/close.svg',
        upload: '/assets/icons/upload.svg',
}

export const initialVideoState = {
        isLoaded: false,
        hasIncrementedView: false,
        isProcessing: true,
        processingProgress: 0,
}

export const infos = ['transcript', 'metadata']

export const DEFAULT_VIDEO_CONFIG = {
        width: { ideal: 1920 },
        height: { ideal: 1080 },
        frameRate: { ideal: 30 },
}

export const DEFAULT_RECORDING_CONFIG = {
        mimeType: 'video/webm;codecs=vp9,opus',
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
}

export const dummyCards = [
        {
                id: '1',
                title: 'Snapchat Message',
                thumbnail: '/assets/samples/thumbnail (1).png',
                createdAt: new Date('2023-10-01'),
                userImg: '/assets/images/jason.png',
                username: 'Jason',
                visibility: 'public',
                duration: 156,
                views: 1000,
        },
        {
                id: '2',
                title: 'Birthday Celebration',
                thumbnail: '/assets/samples/thumbnail (2).png',
                createdAt: new Date('2023-09-15'),
                userImg: '/assets/images/sarah.png',
                username: 'Sarah',
                visibility: 'private',
                duration: 210,
                views: 500,
        },
        {
                id: '4',
                title: 'Cooking Tutorial',
                thumbnail: '/assets/samples/thumbnail (4).png',
                createdAt: new Date('2023-07-10'),
                userImg: '/assets/images/emily.png',
                username: 'Emily',
                visibility: 'public',
                duration: 180,
                views: 800,
        },
        {
                id: '6',
                title: 'Tech Review',
                thumbnail: '/assets/samples/thumbnail (6).png',
                createdAt: new Date('2023-05-25'),
                userImg: '/assets/images/alex.png',
                username: 'Alex',
                visibility: 'public',
                duration: 200,
                views: 1200,
        },
        {
                id: '7',
                title: 'Music Cover',
                thumbnail: '/assets/samples/thumbnail (7).png',
                createdAt: new Date('2023-04-15'),
                userImg: '/assets/images/lisa.png',
                username: 'Lisa',
                visibility: 'public',
                duration: 300,
                views: 2500,
        },
]
