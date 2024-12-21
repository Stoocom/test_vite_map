import { configureStore } from "@reduxjs/toolkit";
import markersSlice from "./slices/markersSlice";
import profileSlice from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    markers: markersSlice,
    profile: profileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
