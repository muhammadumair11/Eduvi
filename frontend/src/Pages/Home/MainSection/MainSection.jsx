import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import frontImg from "../../../Assets/Images/homepage/front-img.png";
import SearchFilter from "./SearchFilter";
import SearchFilterMobile from "./SearchFilterMobile";
import { flexBox } from "../../../HelperPropFunctions/flexBox";
import {
    primaryHeadingBoldProps,
    primarySubtitleProps,
} from "../../../HelperPropFunctions/typography";
import {
    MobileContainer,
    WebContainer,
} from "../../../Common/Wrapper/ResponsiveContainers";

function MainSection() {
    return (
        <Grid container>
            <Grid item md={6} paddingX={{ lg: 3 }} paddingY={{ lg: 5 }}>
                <Box
                    {...flexBox("space-between", "flex-start", "column")}
                    height="80%"
                >
                    <Box paddingY={{ xs: 3 }}>
                        <Button
                            variant="outlined"
                            size="large"
                            disableRipple
                            color="secondary"
                        >
                            Never Stop learning
                        </Button>
                        <Typography
                            {...primaryHeadingBoldProps({
                                marginY: { lg: 2, xs: 2 },
                            })}
                        >
                            Grow up your skills by online courses with Eduvi
                        </Typography>
                        <Typography {...primarySubtitleProps({})}>
                            Eduvi is a Global training provider based across the
                            UK that specialises in accredited and bespoke
                            training courses. We crush the barriers togetting a
                            degree.
                        </Typography>
                    </Box>
                    <WebContainer>
                        <SearchFilter />
                    </WebContainer>
                    <MobileContainer>
                        <SearchFilterMobile />
                    </MobileContainer>
                </Box>
            </Grid>
            <Grid item md={6}>
                <img src={frontImg} width="100%" alt="" />
            </Grid>
        </Grid>
    );
}

export default MainSection;
