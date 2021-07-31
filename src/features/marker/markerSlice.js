import { createSlice } from "@reduxjs/toolkit";

export const markerSlice = createSlice({
  name: "marker",
  initialState: {
    markers: [],
  },
  reducers: {
    addMarker: (state, action) => {
      state.markers.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMarker } = markerSlice.actions;

export const selectMarkers = (state) => state.marker.markers;

export default markerSlice.reducer;
