import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    totalCardCount: 0,
    totalAmount: 0
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            state.totalCardCount = action.payload.reduce((count, product) => count + (product.quantity || 1), 0);
            state.totalAmount = action.payload.reduce((sum, product) => sum + (product.price * (product.quantity || 1)), 0);
        },
        updateTotalCardCount: (state, action) => {
            state.totalCardCount += action.payload;
        },
        updateTotalAmount: (state, action) => {
            state.totalAmount += action.payload;
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
            state.totalCardCount = state.products.reduce((count, product) => count + (product.quantity || 1), 0);
            state.totalAmount = state.products.reduce((sum, product) => sum + (product.price * (product.quantity || 1)), 0);
        },
        updateProductQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.products.find(product => product.id === id);
            if (product) {
                product.quantity = quantity;
            }
        }
    }
});

export const { setProducts, updateTotalCardCount, updateTotalAmount, removeProduct, updateProductQuantity } = productSlice.actions;

export default productSlice.reducer;
