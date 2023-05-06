import React, { Suspense } from "react";
import Loader from "../Components/Loader";
import PublicRoutes from "./PublicRoutes";

const Login = React.lazy(() => import("../Pages/Auth/Login"));
const Register = React.lazy(() => import("../Pages/Auth/Register"));

export const authRoutes = [
    {
        path: "login",
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
        path: "register",
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
];
