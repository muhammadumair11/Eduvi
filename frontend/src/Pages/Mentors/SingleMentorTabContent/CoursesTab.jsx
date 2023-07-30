import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import CourseCard from "../../../Common/Cards/CourseCard/CourseCard";
import { useMentorCoursesQuery } from "../../../Features/Courses/coursesApiSlice";
import Loader from "../../../Components/Loader";
import Typography from "@mui/material/Typography";

function CoursesTab({ mentorId }) {
    const { data, isLoading } = useMentorCoursesQuery(mentorId);

    console.log(data);

    return (
        <Grid container spacing={2}>
            {!isLoading ? (
                <>
                    {data == undefined ? (
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            color="initial"
                        >
                            No Courses
                        </Typography>
                    ) : (
                        data.map((item) => (
                            <Grid item key={item.id} lg={6}>
                                <CourseCard courseData={item} />
                            </Grid>
                        ))
                    )}
                </>
            ) : (
                <Loader />
            )}
        </Grid>
    );
}

export default CoursesTab;
