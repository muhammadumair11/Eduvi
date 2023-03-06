import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import {
    MobileContainer,
    WebContainer,
} from "../../Common/Wrapper/ResponsiveContainers";
import PrimaryCard from "../../Components/PrimaryCard";
import { flexBox } from "../../HelperPropFunctions/flexBox";

import cardImage from "../../Assets/Images/shop.png";
import { primaryHeadingBoldProps } from "../../HelperPropFunctions/typography";
import Aside from "./Aside";
import MainSection from "./MainStoreSection/MainSection";
import NewsLetter from "../../Common/Newsletter/NewsLetter";

function Store() {
    return (
        <Container>
            <Grid container>
                <Grid xs={12} marginBottom={4}>
                    <WebContainer>
                        <PrimaryCard>
                            <Grid container>
                                <Grid
                                    item
                                    xs={6}
                                    {...flexBox("center", "center")}
                                >
                                    <Typography
                                        variant="h1"
                                        fontWeight="bold"
                                        color="primary.light"
                                    >
                                        Eduvi Online <br /> Book Shop
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={cardImage} width="100%" alt="" />
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </Grid>
                        </PrimaryCard>
                    </WebContainer>
                    <MobileContainer>
                        <Typography
                            {...primaryHeadingBoldProps({
                                marginY: 4,
                            })}
                        >
                            All Courses
                        </Typography>
                    </MobileContainer>
                </Grid>
                <Grid md={4}>
                    <Aside />
                </Grid>
                <Grid md={8}>
                    <MainSection />
                </Grid>
                <Grid xs={12} marginY={4}>
                    <NewsLetter />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Store;
