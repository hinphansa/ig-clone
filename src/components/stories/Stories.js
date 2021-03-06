import React from 'react';

import Story from './Story'
import stories from './mockup'
import { Box, makeStyles, styled } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { CarouselProvider, Slider, ButtonBack, ButtonNext, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Stories() {
    const classes = useStyles();
    const totalSlides = Math.round(((stories.length / 7) * 100)) / 100

    return (
        <StoriesWrapper>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={15}
                totalSlides={totalSlides}
                step={1}
                style={{ position: 'relative' }}
            >
                <Slider style={{ width: `${stories.length * 80}`, outline: 'none', paddingLeft: 5 }}>
                    {
                        stories.map((user, index) =>
                            <Slide index={index} key={`slide-${index}`} style={{ width: 80, margin: '0px 3px' }}>
                                <a href="/#" style={{ textDecoration: 'none' }} >
                                    <Story user={user} index={index} />
                                </a>
                            </Slide>
                        )
                    }
                </Slider>
                <div className={classes.miniButtonWrapper}>
                    <ButtonBack
                        className={classes.miniCarouselButton}
                        style={{ left: 0 }}
                        children={<ArrowBackIosIcon style={{ fontSize: 15, transform: 'translateX(3px)' }} />}
                    />
                    <ButtonNext
                        className={classes.miniCarouselButton}
                        style={{ right: 0 }}
                        children={<ArrowForwardIosIcon style={{ fontSize: 15, transform: 'translateX(2px)' }} />}

                    />
                </div>
            </CarouselProvider>
        </StoriesWrapper >
    )
}

const StoriesWrapper = styled(Box)({
    height: 84,
    width: '612',
    borderRadius: 3,
    padding: '16px 0px',
    overflowY: 'hidden',
    backgroundColor: 'white',
    border: '1px solid ',
    borderColor: '#DBDBDB',
})

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex'
    },
    gradientBorder: {
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        borderImageSlice: 1,
        background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
    },
    miniButtonWrapper: {
        left: '1%',
        width: '98%',
        position: 'absolute',
        display: 'flex',
        top: '50%',
        transform: 'translateY(-10px)',
        justifyContent: 'space-between',
    },
    miniCarouselButton: {
        width: 20,
        height: 20,
        borderRadius: '50%',
        position: 'absolute',
        border: 0,
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '1px 1px 2px #000000'
    },
}))