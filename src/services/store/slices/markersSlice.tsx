import { createSlice } from "@reduxjs/toolkit";

export const markersSlice = createSlice({
  name: "markersSlice",
  initialState: {
    isOpenAddMarker: false,
    isOpenAddCommentForm: false,
    currentLocation: {
      center: [37.95, 55.65],
      zoom: 10,
    },
  },
  reducers: {
    toggleOpenAddMarker: (state) => {
      state.isOpenAddMarker = !state.isOpenAddMarker;
    },
    openAddCommentForm: (state, data) => {
      state.isOpenAddCommentForm = data.payload;
    },
    changeZoomCurrentLocation: (state, data) => {
      console.log("changeZoomCurrentLocation data", data);
      state.currentLocation = { ...state.currentLocation, zoom: data.payload };
    },
  },
});

export const {
  toggleOpenAddMarker,
  openAddCommentForm,
  changeZoomCurrentLocation,
} = markersSlice.actions;

export const getMarkers = (state: any) => {
  return state.markers;
};

export default markersSlice.reducer;
