import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
  name:"cart",
  initialState:[],
  reducers:{
    AddItem: (state, action) => {
      const existItem = state.find((item) => item.id === action.payload.id);
      if (existItem) {
        existItem.qty += 1; // Direct mutation is fine with Immer
      } else {
        state.push(action.payload); // Also fine with Immer
      }
      // No explicit return needed - Immer handles it
    },
    RemoveItem:(state,action)=>{
      return state.filter((item)=>item.id!==action.payload)
    }
  }
})

export const {AddItem,RemoveItem}=cartSlice.actions
export default cartSlice.reducer 