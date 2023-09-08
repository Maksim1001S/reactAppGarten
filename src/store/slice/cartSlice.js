import { createSlice } from "@reduxjs/toolkit";
import { sendOrder } from "../../requests/order_req";

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart({ cart }, { payload }) {
            const productInState = cart.find((el) => el.id === payload.id)
            if (!productInState) {
                cart.push({ ...payload, count: 1 })
            } else {
                productInState.count++;
            }
        },
        increment({ cart }, { payload }) {
            const productInState = cart.find((el) => el.id === payload)
            productInState.count++;
        },
        dicrement({ cart }, { payload }) {
            const productInState = cart.find((el) => el.id === payload)
            if (productInState.count > 1) {
                productInState.count--;
            }
        },
        deleteFromCart(state, { payload }) {
            state.cart = state.cart.filter((item) => item.id !== payload);
        },
        clearCart(state, { payload }) {
            state.cart = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(sendOrder.fulfilled, (state, action) => {
                state.status = "succeeded"
            })
            .addCase(sendOrder.rejected, (state, action) => {
                state.status = "failed";
            })
    }
})
export const { addToCart, increment, dicrement, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;