import { apiSlice } from "../../Services/apiSlice";

export const courseCartApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        courseCartItems: builder.query({
            query: () => ({
                url: "/cart/courses",
            }),
        }),
        addCourseCartItems: builder.mutation({
            query: (id) => ({
                url: `/cart/courses/${id}`,
                method: "POST",
            }),
        }),
        removeCourseCartItems: builder.mutation({
            query: (credentials) => ({
                url: `/cart/courses/remove`,
                method: "DELETE",
                body: credentials,
            }),
        }),
    }),
});

export const {
    useCourseCartItemsQuery,
    useAddCourseCartItemsMutation,
    useRemoveCourseCartItemsMutation,
} = courseCartApiSlice;
