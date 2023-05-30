import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: { selected: 1 },
    reducers: {
        setCategory: (state, action) => {
            state.selected = action.payload;
        },
        clearCategory: (state) => {
            state = { selected: 1 };
        },
    },
});

export const { setCategory, clearCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const selectCategory = (state) => state.categories.selected;
