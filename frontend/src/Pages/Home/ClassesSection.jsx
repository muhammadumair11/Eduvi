import { Box, Grid, Typography, Button, Paper, styled } from "@mui/material";
import React from "react";
import { primaryHeadingBoldProps, primarySubtitleProps } from '../../HelperPropFunctions/typography';
import { PrimaryCardWrapper } from '../../Common/Wrapper/PrimaryCardWrapper';
import { Link } from "react-router-dom";

const BgImgWrapper = styled("div", {
    shouldForwardProp: (props) => props == "src",
})(({ theme, src }) => ({
    height: "100%",
    width: "100%",

    borderRadius: theme.shape.borderRadius,

    background: `url(${src}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "30% center",
}));

function ClassesSection() {
    return (
        <Grid container marginY={4} paddingY={4}>
            <Grid item lg={3}></Grid>
            <Grid item lg={6}>
                <Box textAlign="center">
                    <Typography
                        {...primaryHeadingBoldProps({
                            marginBottom: 2,
                        })}
                    >
                        High quality video, audio <br /> & live classes
                    </Typography>
                    <Typography
                        {...primarySubtitleProps({
                            variant: "subtitle2",
                            marginBottom: 2,
                            light: "true",
                        })}
                    >
                        High-definition video is video of higher resolution and
                        quality than standard-definition. While there is no
                        standardized meaning for high-definition, generally any
                        video image with considerably more than 480 vertical
                        scan lines or 576 vertical lines is considered
                        high-definition.
                    </Typography>
                    <Link>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                        >
                            Visit Courses
                        </Button>
                    </Link>
                </Box>
            </Grid>
            <Grid item lg={3}></Grid>
            <Grid item xs={12}>
                <PrimaryCardWrapper marginy="40" height="550px">
                    <BgImgWrapper
                        src={
                            "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        }
                    />
                </PrimaryCardWrapper>
            </Grid>
        </Grid>
    );
}

export default ClassesSection;
