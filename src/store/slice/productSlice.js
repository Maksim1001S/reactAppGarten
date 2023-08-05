import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../../requests/products_req";

const initialState = {
    products: [],
    status: "idle",
    error: null,
}
export const productsSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default productsSlice.reducer;