import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./src/Features/auth/authApiSlice";
import mentorSlice from "./src/Features/Mentors/mentorSlice";
import authSlice from "./src/Features/auth/authSlice";
import { mentorsApiSlice } from "./src/Features/Mentors/mentorsApiSlice";
import coursesSlice from "./src/Features/Courses/coursesSlice";
import { coursesApiSlice } from "./src/Features/Courses/coursesApiSlice";
import { categoriesApiSlice } from "./src/Features/Categories/categoriesApiSlice";
import categoriesSlice from "./src/Features/Categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        [authApiSlice.reducerPath]: authApiSlice.reducer,
        [mentorsApiSlice.reducerPath]: mentorsApiSlice.reducer,
        [coursesApiSlice.reducerPath]: coursesApiSlice.reducer,
        [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
        auth: authSlice,
        mentors: mentorSlice,
        courses: coursesSlice,
        categories: categoriesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApiSlice.middleware)
            .concat(mentorsApiSlice.middleware)
            .concat(coursesApiSlice.middleware)
            .concat(categoriesApiSlice.middleware),
});
