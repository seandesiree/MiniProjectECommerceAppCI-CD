import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';


type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};


const initialState: CartState = { items: [] };


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<string>) { 
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateCartItem(state, action: PayloadAction<{ id: string, quantity: number }>) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});


export const { addToCart, removeFromCart, updateCartItem, clearCart } = cartSlice.actions;

const cartFromStorage = sessionStorage.getItem('cart');
let preloadedState: { cart: CartState } | undefined = undefined;

if (cartFromStorage) {
  try {
    const parsedCart = JSON.parse(cartFromStorage);
    if (Array.isArray(parsedCart)) {
      preloadedState = { cart: { items: parsedCart } };
    }
  } catch (e) {
    console.error('Error parsing cart data from sessionStorage', e);
  }
}


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  preloadedState,
});

export default store;

