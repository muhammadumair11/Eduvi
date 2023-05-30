import React from "react";
import { Grid } from "@mui/material";

import { useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import CourseCard from "../Cards/CourseCard/CourseCard";
import { useCoursesQuery } from "../../Features/Courses/coursesApiSlice";
import { useParams } from "react-router-dom";

function CourseCardList() {
    const { name } = useParams();
    const { data, isSuccess } = useCoursesQuery({ sub_category: name });

    console.log(data);
    return isSuccess ? (
        data.map((item, index) => (
            <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                <CourseCard courseData={item} />
            </Grid>
        ))
    ) : (
        <Loader />
    );
}
export default CourseCardList;
