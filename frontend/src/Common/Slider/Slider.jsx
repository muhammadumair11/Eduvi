import React, { useRef, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Grid, SliderRoot, Typography } from '@mui/material';
import { ImageWrapper, PaperCustom } from './StyledComponents/SliderCustomComponents';
import ChatArea from './ChatArea/ChatArea';
import SliderThumbnail from './SliderThumbnail';
import QuizArea from './QuizArea/QuizArea';

function Item(props) {
    return (
        <PaperCustom variant="outlined">
            <ImageWrapper size="contain" backgroundImage={props.src} />
        </PaperCustom>
    );
}

export default function Slider(props) {
    const [activeSlide, setActiveSlide] = useState(0);

    const disabledRefElement = useRef();
    const activeRefElement = useRef();

    function scrolltoElement(element) {
        setActiveSlide(element);
        activeRefElement.current.scrollIntoView({
            behavior: 'smooth',
        });
    }

    return (
        <Grid container>
            <Grid item md={8} xs={12}>
                <Carousel
                    autoPlay={false}
                    index={activeSlide}
                    onChange={(item) => scrolltoElement(item)}
                    indicatorContainerProps={{
                        style: {
                            display: 'none',
                        },
                    }}
                >
                    {items.map((item, i) => (
                        <Item key={i} src={item.src} />
                    ))}
                </Carousel>
                <Typography variant="h3" color="primary.light" fontWeight={'bold'} paddingTop={{ md: '1.5rem' }}>
                    Maths - for Standard 3 Students | Episode 2
                </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
                <SliderThumbnail
                    items={items}
                    activeRef={activeRefElement}
                    disabledRef={disabledRefElement}
                    activeSlide={activeSlide}
                    setActiveSlide={setActiveSlide}
                />
            </Grid>
            <Grid item xs={12} marginTop="2rem">
                <QuizArea />
            </Grid>
            <Grid item xs={12} marginTop="2rem">
                <ChatArea />
            </Grid>
        </Grid>
    );
}

var items = [
    {
        src: 'https://images.unsplash.com/photo-1669570094762-828f3dfaf675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1669538465657-b6fb9d93b1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1669570094762-828f3dfaf675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1669538465657-b6fb9d93b1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1669570094762-828f3dfaf675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1669538465657-b6fb9d93b1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1669570094762-828f3dfaf675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1669538465657-b6fb9d93b1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
];
