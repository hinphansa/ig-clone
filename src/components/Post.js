import React from 'react'
import { Avatar, Box, Link, makeStyles } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function Post(props) {
    const classes = useStyle();
    return (
        <Box className={classes.root}>
            {/* Header -> 
                avatar = wrapper(42x42),pic(32x32)
                name + ... 
            */}
            <Box className={classes.headerWrapper}>
                <Link component='button' rel="noreferrer" className={classes.profileBorder}>
                    <Avatar className={classes.profileImg} src={`${props.post.user.url}${props.index}`} />
                </Link>
                {/* <Box className={classes.headerInfo}> */}
                <Link component='button' className={classes.username}>
                    <Box>
                        lllukkeddd
                        </Box>
                </Link>
                <Link component='button' className={classes.ellipsis}>
                    <MoreHorizIcon />
                </Link>
                {/* </Box> */}
            </Box>

            {/* Picture + tag*/}
            {/* Action bar -> like + comment + share + bookmark */}
            {/* Who liked */}
            {/* Comment -> name + comment + like */}
            {/* Add a comment  */}
        </Box>
    )
}

const useStyle = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        border: '1px solid',
        borderColor: '#DBDBDB',
        backgroundColor: 'white',
        color: 'black',
        fontFamily: '"Roboto", sans-serif',
    },
    headerWrapper: {
        height: 28,
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
    },
    profileBorder: {
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        textDecoration: 'none',
        background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
    },
    profileImg: {
        width: 32,
        height: 32,
        margin: 0,
        borderRadius: '50%',
        border: '2px solid white'
    },
    username: {
        display: 'flex',
        fontSize: 13,
        marginLeft: 14,
        fontWeight: 600,
        alignItems: 'center',
        color: 'inherit',
        textOverflow: 'ellipsis',
    },
    ellipsis: {
        right: 14,
        fontSize: 10,
        display: 'flex',
        color: 'inherit',
        position: 'absolute',
    }
}))