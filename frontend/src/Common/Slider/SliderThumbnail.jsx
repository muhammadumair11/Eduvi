import { ScrollWrapper } from "../../Common/Wrapper/ScrollWrapper";
import { Box, Link, Paper, Skeleton, Typography } from "@mui/material";
import React from "react";
import {
    ImageWrapper,
    TumbnailImage,
} from "./StyledComponents/SliderCustomComponents";

function SliderThumbnail({
    activeRef,
    disabledRef,
    setActiveSlide,
    activeSlide,
    items,
}) {
    return (
        <ScrollWrapper height="400px">
            {items.data.map((item, i) => (
                <Paper
                    variant={activeSlide == i ? "elevation" : "outlined"}
                    elevation={activeSlide == i ? 24 : 0}
                    ref={activeSlide == i ? activeRef : disabledRef}
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    sx={(theme) => ({
                        cursor: "pointer",
                        marginY: "1rem",
                        backgroundColor:
                            activeSlide == i
                                ? theme.palette.background.paper
                                : theme.palette.action.disabledBackground,
                    })}
                >
                    <Box display="flex" justifyContent="flex-start">
                        <TumbnailImage>
                            {items.thumbnail ? (
                                <ImageWrapper
                                    size="cover"
                                    backgroundImage={items.thumbnail}
                                    backgroundColor={false}
                                />
                            ) : (
                                <>
                                    <Skeleton height="50%" />
                                    <Skeleton height="50%" />
                                </>
                            )}
                        </TumbnailImage>
                        <Box padding=".5rem">
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                color="primary.light"
                            >
                                {item.name.slice(0, 20)}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="secondary.light"
                            >
                                Order {item.order}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="secondary.light"
                            >
                                <Link href={item.data} target="_blank">
                                    Youtube Link
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            ))}
        </ScrollWrapper>
    );
}

export default SliderThumbnail;
