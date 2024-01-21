import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSclice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    //increaseItemQuantity(state, action){},
    //decreaseItemQuantity(state, action){},
    //clearCart(state){}
  },
});

export const { addItem, deleteItem } = cartSclice.actions;

export default cartSclice.reducer;

export const getTotalCarQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((suma, item) => suma + item.totalPrice, 0);
