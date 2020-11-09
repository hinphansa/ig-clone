import React from 'react'
import Post from './Post'
import posts from './mockup'
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