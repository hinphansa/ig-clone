import React from 'react'
import { Box, createMuiTheme, styled } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import Stories from './stories/Stories'
import Posts from './posts/Posts'
import Suggestions from './suggestions/Suggestions'


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FAFAFA',
            main: '#DBDBDB',
            dark: '#A5A7AA',
        },
    }
})

export default function NewsFeed() {
    return (
        <ThemeProvider theme={theme}>
            <MainContent>
                <FeedWrapper>
                    <LeftColumn>
                        <Stories />
                        <Posts />
                    </LeftColumn>
                    <Suggestions />
                </FeedWrapper>
            </MainContent>
        </ThemeProvider>
    )
}

const MainContent = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
})

const FeedWrapper = styled(Box)({
    width: '100%',
    maxWidth: 935,
    paddingTop: 30,
    display: 'flex',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        maxWidth: 600,
        paddingTop: 30,
        display: 'block',
        justifyContent: 'center',
    },
})

const LeftColumn = styled(Box)({
    maxWidth: 614,
    [theme.breakpoints.down('sm')]: {
        alignSelf: 'center',
    }
})

