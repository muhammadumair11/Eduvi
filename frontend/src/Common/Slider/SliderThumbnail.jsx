import { ScrollWrapper } from "../../Common/Wrapper/ScrollWrapper";
import { Box, Paper, Typography } from "@mui/material";
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
            {items.map((item, i) => (
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
                            <ImageWrapper
                                size="cover"
                                backgroundImage={item.src}
                                backgroundColor={true}
                            />
                        </TumbnailImage>
                        <Box padding=".5rem">
                            <Typography
                                variant="subtitle1"
                                fontWeight="bold"
                                color="primary.light"
                            >
                                {"Slide 1 jfkldasjf kldsaj".slice(0, 30)}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="secondary"
                                fontWeight="600"
                            >
                                03:00
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            ))}
        </ScrollWrapper>
    );
}

export default SliderThumbnail;
