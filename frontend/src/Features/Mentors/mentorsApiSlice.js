import { apiSlice } from "../../Services/apiSlice";

export const mentorsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        mentors: builder.query({
            query: () => ({
                url: "/mentors",
            }),
        }),
        mentorRequestStatus: builder.query({
            query: () => ({
                url: "/mentorRequest/status",
            }),
        }),
        mentorRequest: builder.mutation({
            query: () => ({
                url: "/mentorRequest",
            }),
        }),
    }),
});

export const {
    useMentorsQuery,
    useMentorRequestMutation,
    useMentorRequestStatusQuery,
} = mentorsApiSlice;
