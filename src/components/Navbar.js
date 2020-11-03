import React from 'react';
import { Box, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import textLogo from '../asset/text-logo.png'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FAFAFA',
            main: '#DBDBDB',
            dark: '#A5A7AA',
        },
    }
})

const wrapperProps = {
    display: 'flex',
    height: '54px',
    bgcolor: 'white',
    justifyContent: 'center',
    borderColor: 'primary.main',
    border: 1,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
}
// https://material-ui.com/components/app-bar/#app-bar-with-search-field
function Navbar() {
    return (
        <MuiThemeProvider theme={theme}>
            <Box {...wrapperProps}>
                <Box display='flex' width='100%' maxWidth='935px' padding='0px 20px' justifyContent='space-between' alignItems='center'>
                    <Box display='flex' height='100%' alignItems='center' marginTop='5px'>
                        <img src={textLogo} alt='Text Logo' />
                    </Box>

                    <Box>
                        Searchbox
                    </Box>
                    <Box>etc.</Box>

                </Box>
            </Box>
        </MuiThemeProvider>
    )
}

export default Navbar;