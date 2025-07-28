import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userdata: [],
  isAuthReady: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (slice, { payload }) => {
      slice.user = payload;
    },
    logOut: (slice, { payload }) => {
      slice.user = null;
    },
    authReady: (slice, { payload }) => {
      slice.isAuthReady = true;
    },
  },
});

export const { logOut, login, authReady } = userSlice.actions;
export default userSlice.reducer;
