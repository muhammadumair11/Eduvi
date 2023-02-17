import React from "react";
import { Container } from "@mui/material";
import MainSection from "./MainSection/MainSection";
import ClassesSection from "./ClassesSection";
import JoinClassesSection from "./JoinClassesSection";
import JoinTeacherSection from "./JoinTeacherSection";
import NewsLetter from '../../Common/Newsletter/NewsLetter';
import { Outlet } from "react-router-dom";

function Home() {
    return (
        <Container>
            <MainSection />
            <ClassesSection />
            {/* Lesson section */}
            <Outlet/>
            <JoinClassesSection />
            <JoinTeacherSection />
            <NewsLetter />
        </Container>
    );
}

export default Home;
