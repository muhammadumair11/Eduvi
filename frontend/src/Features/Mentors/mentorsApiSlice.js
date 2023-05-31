import { apiSlice } from "../../Services/apiSlice";

export const mentorsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        mentors: builder.query({
            query: () => ({
                url: "/mentors",
            }),
        }),
    }),
});

export const { useMentorsQuery } = mentorsApiSlice;
