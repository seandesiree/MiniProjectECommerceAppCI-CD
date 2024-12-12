import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateCartItem(state, action) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    }
  },
});

export const { addToCart, removeFromCart, updateCartItem, clearCart } = cartSlice.actions;

const cartFromStorage = JSON.parse(sessionStorage.getItem('cart'));
const preloadedState = cartFromStorage ? { cart: cartFromStorage } : undefined;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  preloadedState,
});

export default store;