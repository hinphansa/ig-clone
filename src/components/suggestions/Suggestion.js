import React from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'

function Suggestion(props) {
    return (
        <SuggestionWrapper>
            <img src={props.user.url + props.index} alt={`suggestion-user-${props.index}`} />
            <Box className='text-wrapper'>
                <Box className='user-wrapper'>
                    <Box className='name'>{props.user.name}</Box>
                    <Box className='followed'>{props.user.followed}</Box>
                </Box>
                <Box className='follow-button'>Follow</Box>
            </Box>
        </SuggestionWrapper>
    )
}

export default Suggestion

const SuggestionWrapper = styled(Box)`
    height: 48px;
    font-size: 12px;
    padding-right: 4px;
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }

    .text-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .user-wrapper {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
    }

    .name {
        font-size: 14px;
        font-weight: bold;
    }

    .followed {
        color: #8e8e8e;
    }
    
    .follow-button {
        color: #0095f6;
        cursor: pointer;
        font-weight: bold;
    }
`
