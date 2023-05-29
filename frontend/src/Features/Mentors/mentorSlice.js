import { createSlice } from "@reduxjs/toolkit";

const mentorsSlice = createSlice({
    name: "mentors",
    initialState: { mentors: null },
    reducers: {
        setMentors: (state, action) => {
            state.mentors = action.payload;
        },
        clearMentors: (state) => {
            state = { mentors: null };
        },
    },
});

export const { setMentors, clearMentors } = mentorsSlice.actions;

export default mentorsSlice.reducer;

export const selectMentors = (state) => state.mentors.mentors;
