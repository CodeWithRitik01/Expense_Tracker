import { configureStore } from "@reduxjs/toolkit";
import { transactionReducer } from "../reducers/transactionReducer";

export const store = configureStore({
    reducer:{
        transactionReducer
    }
})
