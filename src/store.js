import { configureStore } from "@reduxjs/toolkit";
import myProductSlice from "./features/product/myProductSlice";
import productSlice from "./features/product/productSlice";
import transactionProductSlice from "./features/product/transactionProductSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
        myProduct: myProductSlice,
        transactionProduct: transactionProductSlice,
    },
});
