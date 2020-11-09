import React from 'react'
import { Avatar, Box, makeStyles } from '@material-ui/core'


export default function Story(props) {
    const classes = useStyles();
    return (
        <Box className={classes.thumbnailStory}>
            <Box className={classes.gradientBorder} >
                <Avatar className={classes.avatar} src={`${props.user.url}${props.index}`} />
            </Box>
            <Box className={classes.text}>
                {props.user.name}
            </Box>
        </Box>
    )
}

const useStyles = makeStyles(() => ({
    thumbnailStory: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    gradientBorder: {
        width: 64,
        height: 64,
        marginBottom: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        borderImageSlice: 1,
        background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
    },
    avatar: {
        width: 53,
        height: 53,
        border: '3px solid white'
    },
    text: {
        display: 'flex',
        color: 'black',
        fontSize: 12,
        fontFamily: '"Roboto", sans-serif',
    }
}))

// const stories = [
//     {
//         url: 'https://picsum.photos/432/768/?random=1',
//         header: {
//             heading: 'eiei',
//             subheading: 'eiii',
//             profileImage: 'https://picsum.photos/432/768/?random=2',
//         }
//     },
//     // 'https://picsum.photos/432/768/?random=2',
//     // 'https://picsum.photos/432/768/?random=3'
// ]