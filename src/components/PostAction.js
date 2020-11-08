import React, { useState } from 'react'
import { Box, Link, makeStyles } from '@material-ui/core'
import { Bookmark, BookmarkBorderOutlined, ChatBubbleOutline, Favorite, FavoriteBorder, SendOutlined } from '@material-ui/icons'

export default function PostAction() {
    const classes = useStyle()
    const [liked, setLiked] = useState(false)
    const [bookmarked, setBookmarked] = useState(false)

    const toggleLike = () => {
        setLiked(!liked)
    }
    const toggleMark = () => {
        setBookmarked(!bookmarked)
    }

    return (
        <Box className={classes.actionBar}>
            <Box style={{ display: 'flex' }}>
                <Link className={classes.link} onClick={toggleLike}>
                    {
                        liked
                            ? <Favorite className={classes.icon} style={{ color: 'rgb(237, 73, 86)' }} />
                            : < FavoriteBorder className={classes.icon} />
                    }
                </Link>
                <Link className={classes.link}>
                    <ChatBubbleOutline className={classes.icon} />
                </Link>
                <Link className={classes.link}>
                    <SendOutlined className={classes.icon} />
                </Link>
            </Box>
            <Link className={classes.link} onClick={toggleMark}>
                {
                    bookmarked
                        ? <Bookmark className={classes.icon} style={{ marginRight: 0 }} />
                        : <BookmarkBorderOutlined className={classes.icon} style={{ marginRight: 0 }} />
                }
            </Link>
        </Box>
    )
}

const useStyle = makeStyles({
    actionBar: {
        height: 40,
        width: 'calc(100% - 26px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 0px 0px 16px',
    },
    icon: {
        fontWeight: '300',
        fontSize: 30,
        display: 'flex',
        marginRight: 16,
    },
    link: {
        color: 'black',
        cursor: 'pointer',
        textDecoration: 'none',
    },
})

