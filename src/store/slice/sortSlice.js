import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    price: {
        priceFrom: null,
        priceTo: null
    },
    discounted: false,
    sortedBy: "byDefault"
}

export const sortSlice = createSlice({
    name: "Sort",
    initialState,
    reducers: {
        addPriceFilter(state, action) {
            state.price = { ...state.price, ...action.payload }
        },
        addDiscountedSort(state, action) {
            state.discounted = action.payload
        },
        addSortedBy(state, action) {
            state.sortedBy = action.payload
        }
    }
})

export const { addPriceFilter, addDiscountedSort, addSortedBy } = sortSlice.actions;

export default sortSlice.reducer;