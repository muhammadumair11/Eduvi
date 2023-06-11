import React, { Suspense } from "react";
import { ScrollRestoration, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../Layouts/DefaultLayout";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Mentors from "../Pages/Mentors/Mentors";
import Loader from "../Components/Loader";

const HighSchool = React.lazy(() =>
    import("../Pages/Home/LessonSection/HighSchool")
);

const MentorsCardList = React.lazy(() =>
    import("../Common/MentorsCardList/MentorsCardList")
);
const HighSchoolCardList = React.lazy(() =>
    import("../Common/SubCategoryCardList/SubCategoryCardList")
);

const Login = React.lazy(() => import("../Pages/Auth/Login"));
const Register = React.lazy(() => import("../Pages/Auth/Register"));

const Pricing = React.lazy(() => import("../Pages/Pricing/Pricing"));

const Store = React.lazy(() => import("../Pages/Store/Store"));
import JoinAsMentor from "../Pages/Mentors/JoinAsMentor";
import SingleMentor from "../Pages/Mentors/SingleMentor";
import CourseDashboard from "../Pages/CourseDashboard/CourseDashboard";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Account from "../Pages/Account/Account";
import CourseCardList from "../Common/CourseCardList/CourseCardList";
import SubCategoryCardList from "../Common/SubCategoryCardList/SubCategoryCardList";
import Cart from "../Pages/Cart/Cart";
import PurchasedCourses from "../Pages/PurchasedCourses/PurchasedCourses";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <ScrollRestoration />
                <DefaultLayout />
            </>
        ),
        children: [
            // Pages
            // Home
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: "/",
                        element: <CourseCardList />,
                    },
                ],
            },
            // Courses
            {
                path: "/courses",
                element: <Courses />,
                children: [
                    {
                        path: "/courses",
                        element: <SubCategoryCardList />,
                    },
                    {
                        path: ":name/:id",
                        element: <CourseCardList />,
                    },
                ],
            },
            {
                path: "/courses/:id",
                element: <PrivateRoutes element={<CourseDashboard />} />,
            },

            // Mentors
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
            {
                path: "/cart",
                element: <PrivateRoutes element={<Cart />} />,
            },
            {
                path: "/purchasedcourses",
                element: <PrivateRoutes element={<PurchasedCourses />} />,
            },
            {
                path: "/joinasmentor",
                element: <JoinAsMentor />,
            },
            {
                path: "/mentor/:id",
                element: <SingleMentor />,
            },

            // Store
            {
                path: "/product-store",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Store />
                    </Suspense>
                ),
            },
            // Pricing
            {
                path: "/pricing",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Pricing />
                    </Suspense>
                ),
            },

            // Account

            {
                path: "/account",
                element: <PrivateRoutes element={<Account />} />,
            },

            {
                path: "/login",
                element: (
                    <PublicRoutes
                        element={
                            <Suspense fallback={<Loader />}>
                                <Login />
                            </Suspense>
                        }
                    />
                ),
            },
            {
                path: "/register",
                element: (
                    <PublicRoutes
                        element={
                            <Suspense fallback={<Loader />}>
                                <Register />
                            </Suspense>
                        }
                    />
                ),
            },
        ],
    },
]);

export default router;
