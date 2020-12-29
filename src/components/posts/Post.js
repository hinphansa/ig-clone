import React from 'react'
import Comment from './Comment'
import PostAction from './PostAction';
import { Avatar, Box, Link, makeStyles } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Slider, Slide, ButtonBack, ButtonNext, CarouselProvider, Image } from 'pure-react-carousel';

export default function Post(props) {
    const classes = useStyle();
    return (
        <Box className={classes.root}>
            <Box className={classes.headerWrapper}>
                <Link component='button' rel="noreferrer" className={classes.profileBorder}>
                    <Avatar className={classes.profileImg} src={`${props.post.user.url}${props.index}`} />
                </Link>
                <Link component='button' className={classes.username}>
                    <Box>
                        {props.post.user.name}
                    </Box>
                </Link>
                <Link component='button' className={classes.ellipsis}>
                    <MoreHorizIcon />
                </Link>
            </Box>

            <Box className={classes.mediaWrapper}>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={3}
                    touchEnabled={false}
                >
                    <Slider>
                        {
                            props.post.post.url.map((url, index) =>
                                <Slide index={index} key={`post-media-${index}`}>
                                    <Image className={classes.media} src={`${url + index}`} alt={`${url + index}`} />
                                </Slide>
                            )
                        }
                    </Slider>
                    <Box className={classes.buttonWrapper}>
                        <ButtonBack
                            className={classes.carouselButton}
                            style={{ left: 0 }}
                            children={<ArrowBackIosIcon style={{ fontSize: 20, transform: 'translateX(4px)' }} />}
                        />
                        <ButtonNext
                            className={classes.carouselButton}
                            style={{ right: 0 }}
                            children={<ArrowForwardIosIcon style={{ fontSize: 20, transform: 'translateX(2px)' }} />}
                        />
                    </Box>
                </CarouselProvider>
            </Box>

            <Box>
                <Box>
                    <PostAction />
                </Box>
                <Box className={classes.likes}>
                    {props.post.post.likes} likes
                </Box>
                <Box className={classes.caption}>
                    <Box style={{ fontWeight: 'bolder' }}>
                        {props.post.user.name}
                    </Box>
                    <Box style={{ marginLeft: 5 }}>
                        {props.post.post.caption}
                    </Box>
                </Box>
                <Box className={classes.time}>
                    <Box>
                        {props.post.post.time}
                    </Box>
                </Box>
            </Box>
            <Comment />
        </Box >
    )
}

const useStyle = makeStyles(() => ({
    root: {
        height: 850,
        display: 'flex',
        marginBottom: 30,
        flexDirection: 'column',
        justifyContent: 'center',

        border: '1px solid',
        borderRadius: 3,
        borderColor: '#DBDBDB',
        backgroundColor: 'white',
        color: 'black',
        fontFamily: '"Roboto", sans-serif',
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    },
    // Header
    headerWrapper: {
        height: 28,
        padding: 16,
        borderBottom: '1px solid #DBDBDB',
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
        fontSize: 14,
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
    },
    // Media
    mediaWrapper: {
        position: 'relative'
    },
    media: {
        width: '100%',
        objectFit: 'cover',
    },
    buttonWrapper: {
        left: '1%',
        width: '98%',
        position: 'absolute',
        display: 'flex',
        top: '50%',
        transform: 'translateY(-15px)',
        justifyContent: 'space-between',
    },
    carouselButton: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        position: 'absolute',
        border: 0,
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '1px 1px 2px #000000'
    },

    // Action bar
    likes: {
        height: 20,
        fontSize: 14,
        paddingLeft: 18,
        marginTop: 5,
        marginBottom: 5,
        lineHeight: '20px',
        fontWeight: 'bolder',
    },
    caption: {
        fontSize: 14,
        paddingLeft: 18,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    time: {
        fontSize: 11,
        color: '#8e8e8e',
        marginLeft: 18,
        marginBottom: 10,
    },
}))