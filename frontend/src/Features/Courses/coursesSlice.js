import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
    name: "courses",
    initialState: { courses: null },
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload;
        },
        clearCourses: (state) => {
            state = { courses: null };
        },
    },
});

export const { setCourses, clearCourses } = coursesSlice.actions;

export default coursesSlice.reducer;

export const selectcourses = (state) => state.courses.courses;
