import { apiSlice } from "../../Services/apiSlice";

export const coursesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        courses: builder.query({
            query: (parameters) => {
                const searchObject = new URLSearchParams(parameters);

                return {
                    url: parameters ? `/courses?${searchObject}` : "/courses",
                };
            },
        }),
        mentorCourses: builder.query({
            query: (id) => ({
                url: `/mentorCourses/${id}`,
            }),
        }),
    }),
});

export const { useCoursesQuery, useMentorCoursesQuery } = coursesApiSlice;
