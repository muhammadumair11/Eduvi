import { apiSlice } from "../../Services/apiSlice";

export const coursesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        courses: builder.query({
            query: () => ({
                url: "/courses",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }),
        }),
        mentorCourses: builder.query({
            query: (id) => ({
                url: `/courses/${id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),
});

export const { useCoursesQuery, useMentorCoursesQuery } = coursesApiSlice;
