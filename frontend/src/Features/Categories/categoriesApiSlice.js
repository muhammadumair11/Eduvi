import { apiSlice } from "../../Services/apiSlice";

export const categoriesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        categories: builder.query({
            query: () => ({
                url: "/categories",
            }),
        }),
        allSubCategories: builder.query({
            query: () => ({
                url: `/subcategories`,
            }),
        }),
        subcategories: builder.query({
            query: (id) => ({
                url: id ? `/categories/${id}` : `/categories/1`,
            }),
        }),
    }),
});

export const {
    useCategoriesQuery,
    useSubcategoriesQuery,
    useAllSubCategoriesQuery,
} = categoriesApiSlice;
