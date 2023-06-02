import { createSlice } from "@reduxjs/toolkit";

const purchasedCoursesSlice = createSlice({
    name: "purchasedCourses",
    initialState: { usersCourses: null },
    reducers: {
        setPurchasedCourses: (state, action) => {
            state.usersCourses = action.payload;
        },
        clearPurchasedCourses: (state) => {
            state.usersCourses = null;
        },
    },
});

export const { setPurchasedCourses, clearPurchasedCourses } =
    purchasedCoursesSlice.actions;

export default purchasedCoursesSlice.reducer;

export const selectPurchasedCourses = (state) =>
    state.purchasedCourses.usersCourses;
