import { createSlice } from '@reduxjs/toolkit';

const initialCart = {
  items: [],
  total: 0
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {

    AddToCart(state, action) {
      const newItem = action.payload;
      const updatedCart = {
        ...state,
        items: state.items ? [...state.items, newItem] : [newItem]
      };
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    },
    RemoveCart(state, action) {
      const itemIdToRemove = action.payload;
      const updatedItems = state.items.filter((item) => item.id !== itemIdToRemove);
      const updatedCart = {
        ...state,
        items: updatedItems,
      };
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    },
    InitializeCart(state, action) {
      return action.payload; // Use the provided payload as the new initial state
    },
    clearCart(state) {
      return {
        ...state,
        items: []
      };
    }
  }
});

// eslint-disable-next-line react-refresh/only-export-components
export const { AddToCart, RemoveCart, InitializeCart,clearCart } = CartSlice.actions;
export const Cartreducers = CartSlice.reducer;


