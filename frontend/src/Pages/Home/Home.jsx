import React, { useEffect } from "react";
import { Container } from "@mui/material";
import MainSection from "./MainSection/MainSection";
import ClassesSection from "./ClassesSection";
import JoinClassesSection from "./JoinClassesSection";
import JoinTeacherSection from "./JoinTeacherSection";
import NewsLetter from "../../Common/Newsletter/NewsLetter";
import { Outlet } from "react-router-dom";
import { useCourseCartItemsQuery } from "../../Features/CourseCart/courseCartApiSlice";
import { setCourseCart } from "../../Features/CourseCart/courseCartSlice";
import { useDispatch } from "react-redux";

function Home() {
    const dispatch = useDispatch();
    const courseCartData = useCourseCartItemsQuery();

    useEffect(() => {
        const courseCart = courseCartData.data;

        dispatch(setCourseCart(courseCart));
    }, [courseCartData.data]);

    return (
        <Container>
            <MainSection />
            <ClassesSection />
            {/* Lesson section */}
            <Outlet />
            <JoinClassesSection />
            <JoinTeacherSection />
            <NewsLetter />
        </Container>
    );
}

export default Home;
