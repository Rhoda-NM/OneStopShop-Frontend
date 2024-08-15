import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        // user: ...
    }
});

export default store;