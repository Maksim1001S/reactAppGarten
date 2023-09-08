import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productReducer from "./slice/productSlice";
import discountedProductsRedcuer from "./slice/discountedProductsSlice";
import productsByCategoryReducer from "./slice/productsByCategorySlice";
import singleProductReducer from "./slice/singleProductSlice";
import cartReducer from "./slice/cartSlice";
import sortReducer from "./slice/sortSlice";


const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productReducer,
        disProducts: discountedProductsRedcuer,
        productsByCategory: productsByCategoryReducer,
        singleProduct: singleProductReducer,
        cart: cartReducer,
        sort: sortReducer
    }
})
export default store;