import React from 'react';
import { Box, Button, createMuiTheme, FormControl, Input, ThemeProvider } from '@material-ui/core'
import styled from 'styled-components';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
        }
    },
    mt: 10,
    spacing: 10,
});

export default function LoginForm() {
    return (
        <ThemeProvider theme={theme}>
            <FormWrapper>
                <FormControl>
                    <Box
                        display='flex'
                        flexWrap='wrap'
                        alignContent='center'
                        flexDirection='column'
                        padding='40px'
                        maxWidth='350px'
                        border={1}
                        bgcolor='white'
                        borderColor='#DADADA'
                    >
                        <Box mt={1} display='flex' flexDirection='column'>
                            <Input />
                        </Box>
                        <Box mt={1} display='flex' flexDirection='column'>
                            <Input />
                        </Box>
                        <Box mt={1} display='flex' flexDirection='column'>
                            <Button variant='contained' color='primary'>
                                Log In
                            </Button>
                        </Box>
                    </Box>
                </FormControl>
            </FormWrapper>
        </ThemeProvider >
    )
}

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    margin: 0;
    height: 100%; 
    max-width: 925px;
    background-color: red;
`