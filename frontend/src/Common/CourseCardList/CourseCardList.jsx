import React from "react";
import { Grid, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import CourseCard from "../Cards/CourseCard/CourseCard";
import { useCoursesQuery } from "../../Features/Courses/coursesApiSlice";
import { useParams } from "react-router-dom";

function CourseCardList() {
    const { id } = useParams();
    const { data, isSuccess } = useCoursesQuery(id ? { sub_category: id } : {});

    return isSuccess ? (
        <>
            <Grid container spacing={data.length != 0 ? 2 : 0}>
                {data.length != 0 ? (
                    data.map((item, index) => (
                        <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                            <CourseCard courseData={item} />
                        </Grid>
                    ))
                ) : (
                    <Grid lg={12}>
                        <Typography
                            variant="h1"
                            marginY={3}
                            fontWeight={"bold"}
                            color="initial"
                        >
                            No Courses
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </>
    ) : (
        <Loader />
    );
}
export default CourseCardList;
