import { createSlice } from "@reduxjs/toolkit";

export const markerSlice = createSlice({
  name: "marker",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = markerSlice.actions;

export const selectCount = (state) => state.marker.value;

export default markerSlice.reducer;
