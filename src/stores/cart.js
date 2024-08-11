import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusTab: false,
    status: 'idle',
    error: null,
};

// Async thunk for adding items to cart
export const addToCartAsync = createAsyncThunk(
    'cart/addToCartAsync',
    async (orderItems, { getState, rejectWithValue }) => {
        console.log(orderItems);
        try {
            const response = await axios.post('/api/cart', { order_items: orderItems }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you have an auth slice with a token
                },
            });
            return response.data; // This should be the updated cart from the backend
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            //console.log(productId, quantity)
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity });
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
            console.log(state.items)
        },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = state.items.filter(item => item.productId !== productId);
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCartAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addToCartAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload.items; // Update the cart with the backend response
                localStorage.setItem("carts", JSON.stringify(state.items));
            })
            .addCase(addToCartAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { addToCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
