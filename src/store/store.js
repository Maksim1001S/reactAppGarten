import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productReducer from "./slice/productSlice";
import discountedProductsRedcuer from "./slice/discountedProductsSlice";
import productsByCategoryReducer from "./slice/productsByCategorySlice";


const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productReducer,
        disProducts: discountedProductsRedcuer,
        productsByCategory: productsByCategoryReducer
    }
})
export default store;