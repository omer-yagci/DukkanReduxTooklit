import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../data/cartItem";

const initialState = {
  cartList: cartItems,
  loading: true,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
});

export default cartSlice.reducer;
