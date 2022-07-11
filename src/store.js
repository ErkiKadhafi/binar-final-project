import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/producrs/productSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
    },
});
