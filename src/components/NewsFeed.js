import React from 'react'
import { Box, createMuiTheme, styled } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import Stories from './Stories'


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
                    </LeftColumn>
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
    height: 300,
    width: '100%',
    maxWidth: 935,
    paddingTop: 30,
    [theme.breakpoints.down('sm')]: {
        maxWidth: 600,
        paddingTop: 30,
        justifyContent: 'center',
    },
})

const LeftColumn = styled(Box)({
    maxWidth: 614,
    [theme.breakpoints.down('sm')]: {
        alignSelf: 'center',
    }
})

