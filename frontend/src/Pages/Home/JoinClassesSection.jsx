import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import registerImg from "../../Assets/Images/homepage/register-img.png";
import { PrimaryCardWrapper } from '../../Common/Wrapper/PrimaryCardWrapper';
import { flexBox } from '../../HelperPropFunctions/flexBox';
import { primaryHeadingBoldProps, primarySubtitleProps } from '../../HelperPropFunctions/typography';
import { WebContainer } from '../../Common/Wrapper/ResponsiveContainers';

function JoinClassesSection() {
    return (
        <Grid container marginY={4} paddingY={3}>
            <Grid item xs={12}>
                <PrimaryCardWrapper padding="0">
                    <Grid container>
                        <Grid
                            item
                            lg={6}
                            paddingX={{ lg: 3, xs: 2 }}
                            paddingY={{ lg: 3, xs: 4 }}
                        >
                            <Box
                                {...flexBox(
                                    "space-between",
                                    "flex-start",
                                    "column"
                                )}
                                height="100%"
                            >
                                <Box>
                                    <Button
                                        variant="outlined"
                                        size="medium"
                                        color="primary"
                                        disableRipple
                                    >
                                        College Level
                                    </Button>
                                    <Typography
                                        {...primaryHeadingBoldProps({
                                            marginY: { lg: 2, xs: 4 },
                                        })}
                                    >
                                        Don’t waste time in COVID-19 pandemic.
                                        Develop your skills.
                                    </Typography>
                                    <Typography
                                        {...primarySubtitleProps({
                                            marginBottom: { lg: 2, xs: 4 },
                                        })}
                                    >
                                        High-definition video is video of higher
                                        resolution and quality than
                                        standard-definition. While there is no
                                        standardized meaning for
                                        high-definition, generally any video.
                                    </Typography>
                                </Box>
                                <Link>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            paddingX: 10,
                                        }}
                                        size="large"
                                        color="primary"
                                    >
                                        Register Now
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item lg={6}>
                            <WebContainer>
                                <img src={registerImg} width="100%" alt="" />
                            </WebContainer>
                        </Grid>
                    </Grid>
                </PrimaryCardWrapper>
            </Grid>
        </Grid>
    );
}

export default JoinClassesSection;
