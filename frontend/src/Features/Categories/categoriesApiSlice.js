import { apiSlice } from "../../Services/apiSlice";

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        categories: builder.query({
            query: () => ({
                url: "/categories",
            }),
        }),
        subcategories: builder.query({
            query: (id) => ({
                url: id ? `/categories/${id}` : `/categories/1`,
            }),
        }),
    }),
});

export const { useCategoriesQuery, useSubcategoriesQuery } = categoriesApiSlice;
