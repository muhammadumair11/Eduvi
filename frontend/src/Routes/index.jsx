import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../Layouts/DefaultLayout";
import Home from "../Pages/Home/Home";
import College from "../Pages/Home/LessonSection/College";
import KinderGarten from "../Pages/Home/LessonSection/KinderGarten";
import Courses from "../Pages/Courses/Courses";
import Mentors from "../Pages/Mentors/Mentors";
import Loader from "../Components/Loader";

const Login = React.lazy(() => import("../Pages/Auth/Login"));
const Register = React.lazy(() => import("../Pages/Auth/Register"));

const HighSchool = React.lazy(() =>
    import("../Pages/Home/LessonSection/HighSchool")
);

const MentorsCardList = React.lazy(() =>
    import("../Common/MentorsCardList/MentorsCardList")
);
const HighSchoolCardList = React.lazy(() =>
    import("../Common/HighSchoolCardList/HighSchoolCardList")
);

const Store = React.lazy(() => import("../Pages/Store/Store"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            // Pages
            // Home
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/",
                        element: (
                            <Suspense fallback={<Loader />}>
                                <HighSchool />
                            </Suspense>
                        ),
                    },
                    { path: "/college", element: <College /> },
                    { path: "/kindergarten", element: <KinderGarten /> },
                ],
            },
            // Courses
            {
                path: "/courses",
                element: <Courses />,
                children: [
                    {
                        path: "/courses",
                        element: (
                            <Suspense fallback={<Loader />}>
                                <HighSchoolCardList />
                            </Suspense>
                        ),
                    },
                ],
            },
            {
                path: "/mentors",
                element: <Mentors />,
                children: [
                    {
                        path: "/mentors",
                        element: (
                            <Suspense fallback={<Loader />}>
                                <MentorsCardList />
                            </Suspense>
                        ),
                    },
                ],
            },

            // Store
            {
                path: "/store",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Store />
                    </Suspense>
                ),
            },
            {
                path: "login",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Login />
                    </Suspense>
                ),
            },
            {
                path: "register",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Register />
                    </Suspense>
                ),
            },
        ],
    },
]);

export default router;
