import { Grid, Typography } from "@mui/material";
import React from "react";
import { primaryHeadingBoldProps } from "../../HelperPropFunctions/typography";
import Filter from "../Filter/Filter";
import HorizontalCourseCard from "../Cards/CourseCard/HorizontalCourseCard";

function FeaturedCourses() {
    return (
        <>
            <Typography marginTop={3} {...primaryHeadingBoldProps({})}>
                Other Courses
            </Typography>
            <Filter />
            <Grid container spacing={2}>
                {[...Array(6)].map((i) => (
                    <Grid key={i} item md={6}>
                        <HorizontalCourseCard />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default FeaturedCourses;
