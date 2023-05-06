import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: localStorage.getItem("token") },
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload;
            localStorage.setItem("token", token);
            state.user = user;
            state.token = token;
        },
        logOut: (state, action) => {
            localStorage.clear();
            state.user = null;
            state.token = null;
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
