import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./src/Features/auth/authApiSlice";
import mentorSlice from "./src/Features/Mentors/mentorSlice";
import authSlice from "./src/Features/auth/authSlice";
import { mentorsApiSlice } from "./src/Features/Mentors/mentorsApiSlice";
import coursesSlice from "./src/Features/Courses/coursesSlice";
import { coursesApiSlice } from "./src/Features/Courses/coursesApiSlice";
import { categoriesApiSlice } from "./src/Features/Categories/categoriesApiSlice";
import categoriesSlice from "./src/Features/Categories/categoriesSlice";
import { courseCartApiSlice } from "./src/Features/CourseCart/courseCartApiSlice";
import courseCartSlice from "./src/Features/CourseCart/courseCartSlice";
import { purchasedCoursesApiSlice } from "./src/Features/PurchasedCourses/purchasedCoursesApiSlice";
import purchasedCoursesSlice from "./src/Features/PurchasedCourses/purchasedCoursesSlice";

export const store = configureStore({
    reducer: {
        [authApiSlice.reducerPath]: authApiSlice.reducer,
        [mentorsApiSlice.reducerPath]: mentorsApiSlice.reducer,
        [coursesApiSlice.reducerPath]: coursesApiSlice.reducer,
        [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
        [courseCartApiSlice.reducerPath]: courseCartApiSlice.reducer,
        [purchasedCoursesApiSlice.reducerPath]:
            purchasedCoursesApiSlice.reducer,

        auth: authSlice,
        mentors: mentorSlice,
        courses: coursesSlice,
        categories: categoriesSlice,
        courseCart: courseCartSlice,
        purchasedCourses: purchasedCoursesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApiSlice.middleware)
            .concat(mentorsApiSlice.middleware)
            .concat(coursesApiSlice.middleware)
            .concat(categoriesApiSlice.middleware)
            .concat(courseCartApiSlice.middleware)
            .concat(purchasedCoursesApiSlice.middleware),
});
