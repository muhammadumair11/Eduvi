import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { useRefreshQuery } from "./Features/auth/authApiSlice";
import { selectCurrentUser, setCredentials } from "./Features/auth/authSlice";
import router from "./Routes/index";
import { useMentorsQuery } from "./Features/Mentors/mentorsApiSlice";
import { selectMentors, setMentors } from "./Features/Mentors/mentorSlice";
import { useCoursesQuery } from "./Features/Courses/coursesApiSlice";
import { setCourses } from "./Features/Courses/coursesSlice";

function App() {
    const dispatch = useDispatch();
    const userData = useRefreshQuery();
    const mentorData = useMentorsQuery();
    const coursesData = useCoursesQuery();

    useEffect(() => {
        const mentors = mentorData.data;
        const courses = coursesData.data;

        dispatch(setMentors(mentors));
        dispatch(setCourses(courses));
    }, [mentorData.data, coursesData.data]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = userData.data?.user;

        if (token) {
            const tokenData = {
                user: user,
                token: token,
            };
            dispatch(setCredentials({ ...tokenData }));
        }
    }, [userData.data]);

    return <RouterProvider router={router} />;
}

export default App;
