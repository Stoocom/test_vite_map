import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState: {
    profile: {},
    isOpenLoginForm: false,
  },
  reducers: {
    toggleOpenLoginForm: (state) => {
      state.isOpenLoginForm = !state.isOpenLoginForm;
    },
    setProfile: (state, data) => {
      console.log("setProfile");
      console.log("payload ", data.payload);
      state.profile = data.payload;
    },
  },
});

export const { toggleOpenLoginForm, setProfile } = profileSlice.actions;

export const getIsOpenLoginForm = (state: any) => {
  return state.profile.isOpenLoginForm;
};

export const getProfile = (state: any) => {
  return state.profile;
};

export default profileSlice.reducer;
