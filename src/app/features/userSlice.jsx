import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userdata: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (slice, { payload }) => {
      slice.user = payload;
    },
    logOut: (slice, { payload }) => {},
  },
});

export const { logOut, login } = userSlice.actions;
export default userSlice.reducer;
