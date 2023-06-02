import { apiSlice } from "../../Services/apiSlice";

export const courseDataApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        courseData: builder.query({
            query: (id) => ({
                url: `/course/${id}`,
            }),
        }),
    }),
});

export const { useCourseDataQuery } = courseDataApiSlice;
