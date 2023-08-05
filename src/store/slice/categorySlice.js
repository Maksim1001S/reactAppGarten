import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../requests/categories_req";

const initialState = {
    categories: [],
    status: "idle",
    error: null,
}

export const categorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.categories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default categorySlice.reducer;