import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      const existItem = state.find((item) => item?.id === action?.payload.id);
      if (existItem) {
        existItem.qty += 1; // Increase quantity if item exists
      } else {
        state.push({ ...action.payload, qty: 1 }); // Ensure new items start with qty: 1
      }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    IncrementQty:(state,action)=>{
      return state.map((item)=>item.id===action.payload?{...item,qty:item.qty+1}:item)
    },
    DecrementQty:(state,action)=>{
      return state.map((item)=>item.id===action.payload?{...item,qty:item.qty-1}:item)
    }
  },
});

export const { AddItem, RemoveItem,IncrementQty,DecrementQty } = cartSlice.actions;
export default cartSlice.reducer;