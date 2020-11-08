import React from 'react'
import Post from './Post'
import { makeStyles } from '@material-ui/core'

export default function Posts() {
    const classes = useStyle();
    return (
        <div className={classes.wrapper}>
            {
                posts.map((post, index) =>
                    <Post key={`post-${index}`} post={post} index={index} />
                )
            }
        </div>
    )
}

const useStyle = makeStyles(() => ({
    wrapper: {
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
    },
}))

const posts = [
    {
        user: {
            name: 'lllukkeddd',
            url: 'https://picsum.photos/432/768/?random=',
        },
        post: {
            url: [
                'https://picsum.photos/600/700/?random=',
                'https://picsum.photos/600/700/?random=',
                'https://picsum.photos/600/700/?random=',
            ],
            location: 'eiei',
            caption: 'Lovely',
            likes: 112,
            time: '8 HOURS AGO',
        },
    }, {
        user: {
            name: 'asdasd',
            url: 'https://picsum.photos/432/768/?random=',
        },
        post: {
            url: [
                'https://picsum.photos/600/700/?random=',
                'https://picsum.photos/600/700/?random=',
                'https://picsum.photos/600/700/?random=',
            ],
            location: 'eiei',
            caption: 'Lovely',
            likes: 112,
            time: '8 HOURS AGO',
        },
    }, {
        user: {
            name: 'lllukkeddd',
            url: 'https://picsum.photos/432/768/?random=',
        },
        post: {
            url: [
                'https://picsum.photos/600/600/?random=',
                'https://picsum.photos/600/600/?random=',
                'https://picsum.photos/600/600/?random=',
            ],
            location: 'eiei',
            caption: 'Lovely',
            likes: 112,
            time: '8 HOURS AGO',
        },
    }, {
        user: {
            name: 'lllukkeddd',
            url: 'https://picsum.photos/432/768/?random=',
        },
        post: {
            url: [
                'https://picsum.photos/600/700/?random=',
                'https://picsum.photos/600/700/?random=',
                'https://picsum.photos/600/700/?random=',
            ],
            location: 'eiei',
            caption: 'Lovely',
            likes: 112,
            time: '8 HOURS AGO',
        },
    }, {
        user: {
            name: 'lllukkeddd',
            url: 'https://picsum.photos/432/768/?random=',
        },
        post: {
            url: [
                'https://picsum.photos/600/600/?random=',
                'https://picsum.photos/600/600/?random=',
                'https://picsum.photos/600/600/?random=',
            ],
            location: 'eiei',
            caption: 'Lovely',
            likes: 112,
            time: '8 HOURS AGO',
        },
    },
]
