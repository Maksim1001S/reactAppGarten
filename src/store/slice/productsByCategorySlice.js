import { createSlice } from "@reduxjs/toolkit"
import { getProductsByCategory } from "../../requests/productsByCategories_req";

const initialState = {
    productsByCategory: {},
    status: "idle",
    error: null,
}
export const productsByCategorySlice = createSlice({
    name: "ProductsbyCategory",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductsByCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProductsByCategory.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.productsByCategory = action.payload;
            })
            .addCase(getProductsByCategory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default productsByCategorySlice.reducer;