import { configureStore } from "@reduxjs/toolkit";
import markerReducer from "../features/marker";

export default configureStore({
  reducer: {
    marker: markerReducer,
  },
});
