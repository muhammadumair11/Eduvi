import { apiSlice } from "../../Services/apiSlice";

export const purchasedCoursesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        purchasedCourses: builder.query({
            query: () => ({
                url: "/purchased/courses",
            }),
        }),
        addPurchasedCourses: builder.mutation({
            query: (credientials) => ({
                url: `/purchased/courses`,
                method: "POST",
                body: credientials,
            }),
        }),
    }),
});

export const { usePurchasedCoursesQuery, useAddPurchasedCoursesMutation } =
    purchasedCoursesApiSlice;
