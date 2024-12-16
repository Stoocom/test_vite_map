import { configureStore } from "@reduxjs/toolkit";
import markersSlice from "./slices/markersSlice";

export const store = configureStore({
  reducer: {
    markers: markersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
