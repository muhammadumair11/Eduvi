import { apiSlice } from "../../Services/apiSlice";

export const coursesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchCourses: builder.mutation({
            query: (filter) => {
                return {
                    url: "/search",
                    method: "POST",
                    body: filter,
                };
            },
        }),
        courses: builder.query({
            query: (parameters) => {
                const searchObject = new URLSearchParams(parameters);

                return {
                    url: parameters ? `/courses?${searchObject}` : "/courses",
                };
            },
        }),
        courseRating: builder.mutation({
            query: (data) => ({
                url: "/courseRating",
                method: "POST",
                body: data,
            }),
        }),
        mentorCourses: builder.query({
            query: (id) => ({
                url: `/mentorCourses/${id}`,
            }),
        }),
    }),
});

export const {
    useCoursesQuery,
    useMentorCoursesQuery,
    useCourseRatingMutation,
    useSearchCoursesMutation,
} = coursesApiSlice;
