import { createSlice } from "@reduxjs/toolkit"
import { getSingleProduct } from "../../requests/singleProduct_req";

const initialState = {
    singleProduct: {},
    status: "idle",
    error: null,
}
export const singleProductSlice = createSlice({
    name: "SingleProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSingleProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.singleProduct = action.payload;
            })
            .addCase(getSingleProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default singleProductSlice.reducer;