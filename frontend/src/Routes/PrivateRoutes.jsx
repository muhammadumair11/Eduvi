import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentToken } from "../Features/auth/authSlice";

function PrivateRoutes({ element }) {
    const token = useSelector(selectCurrentToken);
    return token ? element : <Navigate to="/login" replace />;
}

export default PrivateRoutes;
