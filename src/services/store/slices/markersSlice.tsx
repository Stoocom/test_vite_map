import { createSlice } from "@reduxjs/toolkit";

export const markersSlice = createSlice({
  name: "markersSlice",
  initialState: {
    isOpenAddMarker: false,
    isOpenForm: false,
  },
  reducers: {
    toggleOpenAddMarker: (state) => {
      state.isOpenAddMarker = !state.isOpenAddMarker;
    },
    toggleOpenForm: (state) => {
      state.isOpenForm = !state.isOpenForm;
    },
  },
});

export const { toggleOpenAddMarker, toggleOpenForm } = markersSlice.actions;

export const getIsOpenAddMarker = (state: any) => {
  // console.log('getComponentStore', state.components);
  return state.markers;
};

export const getIsOpenForm = (state: any) => {
  // console.log('getComponentStore', state.components);
  return state.markers.isOpenForm;
};

export default markersSlice.reducer;
