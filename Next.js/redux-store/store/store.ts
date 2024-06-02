import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import authSlice from "./slices/authSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
    reducer: {
        todoSlice: todoSlice,
        authSlice: authSlice,
        productSlice: productSlice
    }
})

