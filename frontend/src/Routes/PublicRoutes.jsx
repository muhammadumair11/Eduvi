import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentToken } from "../Features/auth/authSlice";

function PublicRoutes({ element }) {
    const token = useSelector(selectCurrentToken);
    return token ? <Navigate to="/" replace /> : element;
}

export default PublicRoutes;
