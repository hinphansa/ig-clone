import { Box } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

export default function FeedProfile(props) {
    return (
        <Wrapper>
            <img src={props.user.url} className='img' alt='suggest-profile' />
            <Box className='username'>{props.user.name}</Box>
            <Box className='account'>Switch</Box>
        </Wrapper>
    )
}

const Wrapper = styled(Box)`
    width: 100%;
    display: flex;
    flex: 1 1 auto;
    padding: 16px 0px;
    align-items: center;

    .img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    .username {
        display: flex;
        flex: 1 1 auto;
        margin-left: 15px;
        font-weight: bold;
    }

    .account {
        color: #0095f6;
        cursor: pointer;
        font-size: 12px;
        font-weight: bold;
        padding-right: 4px;
    }
`

