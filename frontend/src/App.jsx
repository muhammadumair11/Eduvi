import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { useRefreshQuery } from "./Features/auth/authApiSlice";
import { selectCurrentToken, setCredentials } from "./Features/auth/authSlice";
import CustomRoutes from "./Routes";
import router from "./Routes/index";

function App() {
    const dispatch = useDispatch();
    const { data } = useRefreshQuery();
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(data);
        if (token) {
            const tokenData = {
                user: data?.user,
                token: token,
            };
            dispatch(setCredentials({ ...tokenData }));
        }
    });
    return <RouterProvider router={router} />;
}

export default App;
