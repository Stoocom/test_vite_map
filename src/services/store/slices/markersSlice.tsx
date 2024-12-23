import { createSlice } from "@reduxjs/toolkit";

export const markersSlice = createSlice({
  name: "markersSlice",
  initialState: {
    isOpenAddMarker: false,
    isOpenAddMarkerForm: false,
    currentLocation: {
      center: [37.95, 55.65],
      zoom: 10,
    },
  },
  reducers: {
    toggleOpenAddMarker: (state) => {
      state.isOpenAddMarker = !state.isOpenAddMarker;
    },
    openAddMarkerForm: (state, data) => {
      state.isOpenAddMarkerForm = data.payload;
    },
  },
});

export const { toggleOpenAddMarker, openAddMarkerForm } = markersSlice.actions;

export const getMarkers = (state: any) => {
  return state.markers;
};

export default markersSlice.reducer;
