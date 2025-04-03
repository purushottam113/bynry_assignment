import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: false,
    reducers: {
        adminLogin: (state, action) => {
            return action.payload;
        },
    },
});

export const {adminLogin} = adminSlice.actions;
export default adminSlice.reducer;