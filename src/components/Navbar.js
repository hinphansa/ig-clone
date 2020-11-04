import React, { useState } from 'react';
import { Avatar, Box, createMuiTheme, InputBase, makeStyles, MuiThemeProvider } from '@material-ui/core';

import textLogo from '../asset/text-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';

import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteBorder';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FAFAFA',
            main: '#DBDBDB',
            dark: '#A5A7AA',
        },
    }
})

const useStyles = makeStyles({
    container: {
        height: 54,
        width: '100%',
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderBottom: '1px solid',
    },
    center: {
        width: '100%',
        display: 'flex',
        maxWidth: 935,
        padding: '0px 20px',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logoWrapper: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
    },
    searchWrapper: {
        display: 'flex',
        height: 16,
        width: 125,
        minWidth: 215,
        fontSize: 16,
        padding: '5px 10px',
        borderRadius: 5,
        border: '1px solid',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.light,
    },
    searchIcon: {
        fontSize: 16,
        color: theme.palette.primary.dark,
    },
    input: {
        fontSize: 13,
    },
    inputCover: {
        top: 0,
        left: 0,
        zIndex: 2,
        width: '100%',
        position: 'absolte',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        cursor: 'text',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    iconWraper: {
        display: 'flex',
        fontSize: 22,
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    iconGroup: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    etcIcon: {
        fontSize: 25,
        marginLeft: 20,
        cursor: 'pointer',
    },
    profileIcon: {
        width: 23,
        height: 23,
        marginLeft: 20,
    }
});

export default function Navbar() {
    const [searching, setSearching] = useState(false)
    const classes = useStyles(searching);

    const [icon, setIcon] = useState(0)

    const search = searching
        ? <React.Fragment>
            <SearchIcon className={classes.searchIcon} />
            <InputBase placeholder='Search...' className={classes.input} />
            <CancelIcon className={classes.searchIcon} onClick={() => setSearching(!searching)} />
        </React.Fragment>
        : <div className={classes.inputCover} onClick={() => setSearching(!searching)}>
            <div style={{ display: 'flex' }}>
                <SearchIcon className={classes.searchIcon} />
                <div style={{ marginLeft: 5, color: `${theme.palette.primary.dark}` }}>Search</div>
            </div>
        </div>


    return (
        <MuiThemeProvider theme={theme}>
            <Box className={classes.container} style={{ borderColor: `${theme.palette.primary.main}` }}>
                <Box className={classes.center}>
                    <Box className={classes.logoWrapper}>
                        <img src={textLogo} alt='Text Logo' style={{ height: 29, marginTop: 8 }} />
                    </Box>

                    <Box className={classes.searchWrapper} style={{ borderColor: `${theme.palette.primary.main}` }}>
                        {search}
                    </Box>

                    <Box className={classes.iconWraper}>
                        <Box className={classes.iconGroup}>

                            {
                                icon === 0
                                    ? <HomeIcon className={classes.etcIcon} style={{ fontSize: 33 }} />
                                    : <HomeOutlinedIcon className={classes.etcIcon} style={{ fontSize: 33 }} onClick={() => setIcon(0)} />
                            }
                            {
                                icon === 1
                                    ? <SendIcon className={classes.etcIcon} />
                                    : <SendOutlinedIcon className={classes.etcIcon} onClick={() => setIcon(1)} />
                            }
                            {
                                icon === 2
                                    ? <ExploreIcon className={classes.etcIcon} />
                                    : <ExploreOutlinedIcon className={classes.etcIcon} onClick={() => setIcon(2)} />
                            }
                            {
                                icon === 3
                                    ? < FavoriteIcon className={classes.etcIcon} />
                                    : <FavoriteOutlinedIcon className={classes.etcIcon} onClick={() => setIcon(3)} />
                            }

                            <Avatar className={classes.profileIcon} src='https://instagram.fbkk7-2.fna.fbcdn.net/v/t51.2885-19/s150x150/83145213_207820283683810_6839710134407528448_n.jpg?_nc_ht=instagram.fbkk7-2.fna.fbcdn.net&_nc_ohc=L7y7AB8e1UgAX_Qs9Wm&oh=ca9d55f90476b941517f78b53c8035cf&oe=5FCDFDDB' />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </MuiThemeProvider>
    )
}