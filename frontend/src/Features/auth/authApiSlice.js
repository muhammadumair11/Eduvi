import { apiSlice } from "../../Services/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: { ...credentials },
            }),
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: "/register",
                method: "POST",
                body: { ...credentials },
            }),
        }),
        update: builder.mutation({
            query: (credentials) => ({
                url: `/update`,
                method: "POST",
                body: credentials,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
        }),
        refresh: builder.query({
            query: () => ({
                url: "/refresh",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "POST",
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useRefreshQuery,
    useRegisterMutation,
    useUpdateMutation,
} = authApiSlice;
export const useLogout = () => {
    return authApiSlice.useLogoutMutation();
};
