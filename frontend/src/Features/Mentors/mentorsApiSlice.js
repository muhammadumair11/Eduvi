import { apiSlice } from "../../Services/apiSlice";

export const mentorsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        mentors: builder.query({
            query: () => ({
                url: "/mentors",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),
});

export const { useMentorsQuery } = mentorsApiSlice;
