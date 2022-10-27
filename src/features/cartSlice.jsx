import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  loading: true,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
});

export default cartSlice.reducer;
