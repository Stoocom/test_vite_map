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
    markerComment: "",
    marketRating: "2",
  },
  reducers: {
    toggleOpenAddMarker: (state) => {
      state.isOpenAddMarker = !state.isOpenAddMarker;
    },
    openAddCommentForm: (state, data) => {
      state.isOpenAddCommentForm = data.payload;
    },
    changeZoomCurrentLocation: (state, data) => {
      state.currentLocation = { ...state.currentLocation, zoom: data.payload };
    },
    changeMarkerComment: (state, data) => {
      state.markerComment = data.payload.trim();
    },
    changeMarketRating: (state, data) => {
      state.marketRating = data.payload;
    },
  },
});

export const {
  toggleOpenAddMarker,
  openAddCommentForm,
  changeZoomCurrentLocation,
  changeMarkerComment,
  changeMarketRating,
} = markersSlice.actions;

export const getMarkers = (state: any) => {
  return state.markers;
};

export default markersSlice.reducer;
