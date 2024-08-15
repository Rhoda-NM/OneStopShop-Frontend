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
        try {
            const response = await axios.post('/api/cart', { order_items: orderItems }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return response.data.cart_items; // This should be the updated cart from the backend
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for clearing the cart
export const clearCartAsync = createAsyncThunk(
    'cart/clearCartAsync',
    async (_, { rejectWithValue }) => {
        try {
            await axios.delete('/api/cart', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return []; // Return an empty array to clear the cart in the state
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
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity });
            }
            localStorage.setItem("carts", JSON.stringify(state.items));
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
        // Synchronous clearCart action (for local clearing)
        clearCart(state) {
            state.items = [];
            localStorage.removeItem("carts");
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
            })
            // Handle clearCartAsync
            .addCase(clearCartAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(clearCartAsync.fulfilled, (state) => {
                state.status = 'succeeded';
                state.items = []; // Clear the cart in the state
                localStorage.removeItem("carts");
            })
            .addCase(clearCartAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

// Selector to calculate total price
export const selectTotal = (state) => 
    state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);



export const { addToCart, changeQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
