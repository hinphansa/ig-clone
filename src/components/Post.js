import React from 'react'
import { Avatar, Box, makeStyles } from '@material-ui/core'

export default function Post(props) {
    const classes = useStyle();
    return (
        <Box className={classes.wrapper}>
            {/* Header -> 
                avatar = wrapper(42x42),pic(32x32)
                name + ... 
            */}
            <Box className={classes.headerWrapper}>
                <a href='/#' style={{ textDecoration: 'none' }}>
                    <Avatar className={classes.profileImg} src={`${props.post.user.url}${props.index}`} />
                </a>
                <Box className={classes.headerInfo}>
                    <Box className={classes.username}>
                    </Box>
                    <Box className={classes.username}>
                    </Box>
                </Box>
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
    wrapper: {
        display: 'flex',
        flexDirection: 'column',

        border: '1px solid',
        borderColor: '#DBDBDB',
        backgroundColor: 'white',
    },
    headerWrapper: {
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImg: {
        width: 32,
        height: 32,
        margin: 0,
    },
    headerInfo: {
        marginLeft: 14,
    }
}))