// selectedProductSlice.js
import { createSlice } from '@reduxjs/toolkit';

const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState: null,
  reducers: {
    setSelectedProduct: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedProduct } = selectedProductSlice.actions;
export default selectedProductSlice.reducer;