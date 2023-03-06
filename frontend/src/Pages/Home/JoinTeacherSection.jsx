import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import teacherImg from "../../Assets/Images/homepage/teacher-img.png";
import { WebContainer } from "../../Common/Wrapper/ResponsiveContainers";
import { primaryHeadingBoldProps } from "../../HelperPropFunctions/typography";
import { flexBox } from "../../HelperPropFunctions/flexBox";
import { Link } from "react-router-dom";

function JoinTeacherSection() {
    return (
        <Grid container marginY={4} paddingY={4}>
            <Grid item lg={5}>
                <WebContainer>
                    <img src={teacherImg} width="100%" height="500px" alt="" />
                </WebContainer>
            </Grid>
            <Grid item lg={7} padding={{ lg: "2rem 4rem" }}>
                <Box
                    height="100%"
                    {...flexBox("center", "flex-start", "column")}
                >
                    <Typography
                        {...primaryHeadingBoldProps({
                            marginBottom: 2,
                        })}
                    >
                        Want to share your knowledge? <br /> Join us a Mentor
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        marginBottom={2}
                        color="primary.light"
                    >
                        High-definition video is video of higher resolution and
                        quality than standard-definition. While there is no
                        standardized meaning for high-definition, generally any
                        video.
                    </Typography>
                    <Link to={"/joinasmentor"}>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
                        >
                            Career Information
                        </Button>
                    </Link>
                </Box>
            </Grid>
        </Grid>
    );
}

export default JoinTeacherSection;
