// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productslice';
import cartReducer from './cartSlice';
import selectedProductReducer from './selectproductslicer';
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    selectedProduct: selectedProductReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    products: store.getState().products,
    selectedProduct: store.getState().selectedProduct,
    cart: store.getState().cart,
  });
});

export default store;
