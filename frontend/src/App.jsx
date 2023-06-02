import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/index";
import { useDispatch } from "react-redux";
import { useRefreshQuery } from "./Features/auth/authApiSlice";
import { useMentorsQuery } from "./Features/Mentors/mentorsApiSlice";
import { useCoursesQuery } from "./Features/Courses/coursesApiSlice";
import { useCourseCartItemsQuery } from "./Features/CourseCart/courseCartApiSlice";
import { setMentors } from "./Features/Mentors/mentorSlice";
import { setCourses } from "./Features/Courses/coursesSlice";
import { setCourseCart } from "./Features/CourseCart/courseCartSlice";
import { setCredentials } from "./Features/auth/authSlice";
import { usePurchasedCoursesQuery } from "./Features/PurchasedCourses/purchasedCoursesApiSlice";
import { setPurchasedCourses } from "./Features/PurchasedCourses/purchasedCoursesSlice";

function App() {
    const dispatch = useDispatch();
    const userData = useRefreshQuery();
    const mentorData = useMentorsQuery();
    const coursesData = useCoursesQuery();
    const courseCartData = useCourseCartItemsQuery();
    const purchasedCoursesData = usePurchasedCoursesQuery();
    useEffect(() => {
        const mentors = mentorData.data;
        const courses = coursesData.data;
        const courseCart = courseCartData.data;
        const purchasedCourses = purchasedCoursesData.data;

        dispatch(setMentors(mentors));
        dispatch(setCourses(courses));
        dispatch(setCourseCart(courseCart));
        dispatch(setPurchasedCourses(purchasedCourses));
    }, [
        mentorData.data,
        coursesData.data,
        courseCartData.data,
        purchasedCoursesData.data,
    ]);

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
