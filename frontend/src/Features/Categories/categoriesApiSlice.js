import { apiSlice } from "../../Services/apiSlice";

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        categories: builder.query({
            query: () => ({
                url: "/categories",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }),
        }),
        subcategories: builder.query({
            query: (id) => ({
                url: `/categories/${id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),
});

export const { useCategoriesQuery, useSubcategoriesQuery } = categoriesApiSlice;
