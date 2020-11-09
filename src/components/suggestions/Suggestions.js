import React from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'
import Suggestion from './Suggestion'
import FeedProfile from './FeedProfile'
import { user, suggestUser } from './mockup'
import useWindowSize from '../../hooks/useWindowSize'
import useScrollPosition from '../../hooks/useScrollPosition'

export default function Suggestions() {
    const scroll = useScrollPosition();
    const windowSize = useWindowSize();
    return (
        <SuggestionWrapper style={{ paddingTop: scroll, display: windowSize.width <= 959 && 'none' }}>
            <FeedProfile user={user} />
            <SuggestionHeader>
                <Box className='suggest'>
                    Suggestion For You
                </Box>
                <Box className='see-all'>
                    See All
                </Box>
            </SuggestionHeader>
            {
                suggestUser.map((user, index) =>
                    <Suggestion user={user} index={index}></Suggestion>
                )
            }
        </SuggestionWrapper>
    )
}

const SuggestionWrapper = styled(Box)`
    height: 100vh;
    width: 293px;
    max-width: 293px;
    position: sticky;
    top: 84px;
    padding: 0;
    margin-left: 30px;
    margin-bottom: 30px;
    font-family: "Roboto", sans-serif;
`

const SuggestionHeader = styled(Box)`
    width: 100%;
    height: 20px;
    display: flex;
    padding-bottom: 10px;
    margin-top: 10px;
    justify-content: space-between;

    .suggest {
        color: #8e8e8e;
        font-size: 14px;
        line-height: 20px;
        font-weight: bolder;
    }

    .see-all {
        color: black;
        cursor: pointer;
        font-size: 12px;
        line-height: 20px;
        font-weight: bold;
        margin-right: 4px;
    }
`

