import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./shoppingCartSlice";

export const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer
    },
   
    
});

