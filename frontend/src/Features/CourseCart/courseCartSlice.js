import { createSlice } from "@reduxjs/toolkit";

const courseCart = createSlice({
    name: "coursecart",
    initialState: { cart: null },
    reducers: {
        setCourseCart: (state, action) => {
            state.cart = action.payload;
        },
        clearCourseCart: (state) => {
            state.cart = null;
        },
    },
});

export const { setCourseCart, clearCourseCart } = courseCart.actions;

export default courseCart.reducer;

export const selectCart = (state) => state.courseCart.cart;
