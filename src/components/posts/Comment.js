import React, { useState } from 'react'
import { Box, Button, InputBase } from '@material-ui/core'
import styled from 'styled-components'

export default function Comment() {
    const [comment, setComment] = useState('')

    const comments = (e) => {
        setComment(e.target.value)
    }

    const postComment = () => {
        console.log(comment);
    }

    return (
        <CommentBox>
            <InputBase
                onChange={comments}
                placeholder='Add a comment...'
                style={{ width: '100%' }}
            />
            <Button
                onClick={postComment}
                disabled={comment.length === 0}
                disableRipple={true}
                disableElevation={true}
                disableTouchRipple={true}
                style={{ color: `${comment.length === 0 ? '#A3BAC3' : '#0095f6'}` }}>
                Post
                </Button>
        </CommentBox>
    )
}

const CommentBox = styled(Box)`
    height: 60px;
    padding-left: 20px;
    padding-right: 5px;
    border-top: 1px solid #DBDBDB;

    display: flex;
    align-items: center;
`
