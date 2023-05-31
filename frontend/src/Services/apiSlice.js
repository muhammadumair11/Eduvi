import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../Features/auth/authSlice";
import axios from "axios";

// const API_URL = "http://127.0.0.1:8000/api/";
export const APP_URL = "http://0.0.0.0/api/";
export const ASSET_URL = "http://0.0.0.0/storage/";

const baseQuery = fetchBaseQuery({
    baseUrl: APP_URL,
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.originalStatus === 403) {
        console.log("sending refresh token");
        // send refresh token to get new access token
        const refreshResult = await baseQuery("/refresh", api, extraOptions);
        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            // store the new token
            api.dispatch(setCredentials({ ...refreshResult.data, user }));
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({}),
});
