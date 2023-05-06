import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./src/Features/auth/authApiSlice";
import authReducer from "./src/Features/auth/authSlice";

export const store = configureStore({
    reducer: {
        [authApiSlice.reducerPath]: authApiSlice.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApiSlice.middleware),
});
