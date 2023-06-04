import React, { useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import router from "./Routes/index";
import { useDispatch, useSelector } from "react-redux";
import { useLogout, useRefreshQuery } from "./Features/auth/authApiSlice";
import { useMentorsQuery } from "./Features/Mentors/mentorsApiSlice";
import { useCoursesQuery } from "./Features/Courses/coursesApiSlice";
import { useCourseCartItemsQuery } from "./Features/CourseCart/courseCartApiSlice";
import { setMentors } from "./Features/Mentors/mentorSlice";
import { setCourses } from "./Features/Courses/coursesSlice";
import {
    clearCourseCart,
    setCourseCart,
} from "./Features/CourseCart/courseCartSlice";
import {
    logOut,
    selectCurrentUser,
    setCredentials,
} from "./Features/auth/authSlice";
import { usePurchasedCoursesQuery } from "./Features/PurchasedCourses/purchasedCoursesApiSlice";
import { setPurchasedCourses } from "./Features/PurchasedCourses/purchasedCoursesSlice";
import { Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Loader from "./Components/Loader";

function App() {
    const dispatch = useDispatch();
    const userState = useSelector(selectCurrentUser);
    const userData = useRefreshQuery();
    const mentorData = useMentorsQuery();
    const coursesData = useCoursesQuery();
    const courseCartData = useCourseCartItemsQuery();
    const purchasedCoursesData = usePurchasedCoursesQuery();

    const [logout, { isLoading }] = useLogout();

    const handleLogout = async () => {
        const { data } = await logout();
        console.log(data);
        if (data.logout) {
            dispatch(logOut());
        }
    };

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
    return userState && userState.user_type == "mentor" ? (
        <Box
            height="100vh"
            width="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
        >
            <Typography variant="h1" fontWeight="bold" color="primary.light">
                Access Mentors Dashboard
            </Typography>
            <br />
            <Typography variant="subtitle1" color="initial">
                or make another student account
            </Typography>
            <LoadingButton
                sx={{ marginY: 2 }}
                variant="contained"
                loading={isLoading}
                size="medium"
                color="primary"
                onClick={handleLogout}
            >
                <Typography
                    fontWeight="bold"
                    lineHeight={1}
                    variant="subtitle1"
                    color="inherit"
                >
                    Log out
                </Typography>
            </LoadingButton>
        </Box>
    ) : (
        <RouterProvider router={router} />
    );
}

export default App;
