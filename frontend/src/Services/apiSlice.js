import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../Features/auth/authSlice";
import axios from "axios";

const LOCAL_NETWORK = "LOCAL_NETWORK";
const LOCAL_ENVIRONMENT = "LOCAL_ENVIRONMENT";

const state = LOCAL_NETWORK;

const localNetworkUrl = "http://192.168.100.6/api/";
const localNetworkAssetUrl = "http://192.168.100.6/storage/";

const localEnvironmentUrl = "http://0.0.0.0/api/";
const localEnvironmentAssetUrl = "http://0.0.0.0/storage/";

export const APP_URL =
    state == LOCAL_NETWORK ? localNetworkUrl : localEnvironmentUrl;
export const ASSET_URL =
    state == LOCAL_NETWORK ? localNetworkAssetUrl : localEnvironmentAssetUrl;

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
