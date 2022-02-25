import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart(state, action) {
      const newlist = state.cartItems;

      const isexists = state.cartItems.findIndex((i) => i.id === action.payload.id);

      if (isexists > -1) {
        newlist[isexists].quantity += 1;
        state.cartItems = newlist;
        return;
      }

      state.cartItems = [...state.cartItems, action.payload];
    },

    updatecart(state, action) {
      const newlist = state.cartItems;
      const isexists = state.cartItems.findIndex((i) => i.id === action.payload.id);

      if (isexists > -1) {
        newlist[isexists].quantity = action.payload.quant;
        state.cartItems = newlist;
      }

      return state;
    },

    deletecart(state, action) {
      const newlist = state.cartItems;
      const isexists = state.cartItems.findIndex((i) => i.id === action.payload.id);

      if (isexists > -1) {
        const filterlist = newlist.filter((i) => i.id !== action.payload.id);
        state.cartItems = filterlist;
      }
      return state;
    },
  },
});

export const { addtocart, updatecart, deletecart } = cartSlice.actions;

export default cartSlice.reducer;
