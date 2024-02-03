import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  disProducts: [],
  status: "idle",
  error: null,
};

export const filterDisProducts = createAsyncThunk(
  "filter/disProducts",
  async (products) => {
    const filteredProducts = products.products.filter(
      (el) => el.discont_price !== undefined
    );
    return filteredProducts;
  }
);
export const discountedProductsSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(filterDisProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterDisProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.disProducts = action.payload;
      })
      .addCase(filterDisProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default discountedProductsSlice.reducer;
