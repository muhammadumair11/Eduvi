import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import NewsLetter from "../../Common/Newsletter/NewsLetter";
import Slider from "../../Common/Slider/Slider";
import PrimaryCard from "../../Components/PrimaryCard";
import CourseInfoCard from "./CourseInfoCard";
import { useParams } from "react-router-dom";
import { useCourseDataQuery } from "../../Features/CourseData/courseDataApiSlice";
import Loader from "../../Components/Loader";

export default function CourseDashboard(props) {
    const { id } = useParams();

    const { data, isLoading } = useCourseDataQuery(id);

    return (
        <>
            <Container>
                {isLoading ? (
                    <Loader />
                ) : (
                    <Grid container>
                        <Grid item xs={12}>
                            <PrimaryCard>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Slider courseData={data} />
                                    </Grid>
                                </Grid>
                            </PrimaryCard>
                        </Grid>
                        <Grid item xs={12} md={8} order={{ md: 2, xs: 3 }}>
                            <Box paddingY={4}>
                                <Typography
                                    variant="h1"
                                    marginBottom={2}
                                    color="primary.light"
                                >
                                    Course Description
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="primary.light"
                                >
                                    {data.description}
                                </Typography>
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
                            <CourseInfoCard courseInfo={data} />
                        </Grid>
                        <Grid item xs={12} order={4}>
                            <NewsLetter />
                        </Grid>
                    </Grid>
                )}
            </Container>
        </>
    );
}
