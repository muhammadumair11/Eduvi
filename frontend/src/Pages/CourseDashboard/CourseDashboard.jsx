import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import NewsLetter from "../../Common/Newsletter/NewsLetter";
import Slider from "../../Common/Slider/Slider";
import PrimaryCard from "../../Components/PrimaryCard";
import CourseInfoCard from "./CourseInfoCard";

export default function CourseDashboard(props) {
    return (
        <>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <PrimaryCard>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Slider />
                                </Grid>
                            </Grid>
                        </PrimaryCard>
                    </Grid>
                    <Grid item xs={12} md={8} order={{ md: 2, xs: 3 }}>
                        <Box paddingY={4}>
                            {[
                                {
                                    title: "Course Details",
                                },
                                {
                                    title: "Certification",
                                },
                                {
                                    title: "Who this course is for",
                                },
                            ].map((el, i) => (
                                <Box key={i} marginY={1}>
                                    <Typography
                                        variant="h1"
                                        marginBottom={2}
                                        color="primary.light"
                                    >
                                        {el.title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="primary.light"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        color="primary.light"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Quis ipsum suspendisse ultrices
                                        gravida. Risus commodo viverra maecenas
                                        accumsan lacus vel facilisis consectetur
                                        adipiscing elit.
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        order={{ md: 3, xs: 2 }}
                        padding={{ md: 3, xs: 0 }}
                        paddingY={{ xs: 2 }}
                    >
                        <CourseInfoCard />
                    </Grid>
                    <Grid item xs={12} order={4}>
                        <NewsLetter />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
