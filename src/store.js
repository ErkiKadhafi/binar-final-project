import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import productSlice from "./features/user/product/productSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        addProduct: productSlice
    },
});
