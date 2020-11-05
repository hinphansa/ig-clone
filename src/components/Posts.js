import React from 'react'
import Post from './Post'
import { makeStyles } from '@material-ui/core'

export default function Posts() {
    const classes = useStyle();
    return (
        <div className={classes.wrapper}>
            {
                posts.map((post, index) =>
                    <Post post={post} index={index} />
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
            name: 'EIEI',
            url: 'https://picsum.photos/432/768/?random=',
        },
        post: {
            url: [],
            location: '',
            caption: '',
            likes: '',
        },
        comments: [
            {
                user: '',
                comment: '',
            }, {
                user: '',
                comment: '',
            },
        ]
    },
    // {
    //     user: {
    //         name: '',
    //         url: '',
    //     },
    //     post: {
    //         url: [],
    //         caption: '',
    //         likes: '',
    //     },
    //     comments: [
    //         {
    //             user: '',
    //             comment: '',
    //         }, {
    //             user: '',
    //             comment: '',
    //         },
    //     ]
    // },
]
