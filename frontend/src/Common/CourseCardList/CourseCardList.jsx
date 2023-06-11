import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import CourseCard from "../Cards/CourseCard/CourseCard";
import { useCoursesQuery } from "../../Features/Courses/coursesApiSlice";
import { useParams } from "react-router-dom";
import { selectcourses, setCourses } from "../../Features/Courses/coursesSlice";

function CourseCardList() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const courses = useSelector(selectcourses);
    const { data, isSuccess } = useCoursesQuery(id ? { sub_category: id } : {});

    useEffect(() => {
        dispatch(setCourses(data));
    }, [data]);

    return isSuccess ? (
        <>
            <Grid container spacing={data.length != 0 ? 2 : 0}>
                {courses ? (
                    courses.map((item, index) => (
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
