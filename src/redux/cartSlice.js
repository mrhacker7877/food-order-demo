import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const exist = state.find(item => item.id === action.payload.id);
      if (!exist) {
        state.push({ ...action.payload, qty: 1 });
      }
    },

    RemoveItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },

    IncreaseQty: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) item.qty += 1;
    },

    DecreaseQty: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    }
  }
});

export const { AddItem, RemoveItem, IncreaseQty, DecreaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;
