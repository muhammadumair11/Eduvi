
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { flexBox } from "../../HelperPropFunctions/flexBox";
import { primarySubtitleProps } from "../../HelperPropFunctions/typography";
import { ScrollWrapper } from '../Wrapper/ScrollWrapper';
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
                    <Box {...flexBox("flex-start", "", "")}>
                        <TumbnailImage>
                            <ImageWrapper
                                size="cover"
                                backgroundImage={item.src}
                                backgroundColor={true}
                            />
                        </TumbnailImage>
                        <Box padding=".5rem">
                            <Typography
                                {...primarySubtitleProps({
                                    light: "true",
                                    fontWeight: "bold",
                                })}
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
