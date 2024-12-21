import { createSlice } from "@reduxjs/toolkit";

export const markersSlice = createSlice({
  name: "markersSlice",
  initialState: {
    isOpenAddMarker: false,
  },
  reducers: {
    toggleOpenAddMarker: (state) => {
      state.isOpenAddMarker = !state.isOpenAddMarker;
    },
  },
});

export const { toggleOpenAddMarker } = markersSlice.actions;

export const getIsOpenAddMarker = (state: any) => {
  return state.markers;
};

export default markersSlice.reducer;
