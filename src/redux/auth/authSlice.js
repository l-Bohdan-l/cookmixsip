import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  isLoggedIn: false,
  userId: null,
  // isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
      state.isLoggedIn = true;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setRefetchedCredentials: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    clearCredentials: (state) => {
      state.name = null;
      state.email = null;
      state.userId = null;
      state.isLoggedIn = false;
    },
  },
});

export const {
  setCredentials,
  setIsLoggedIn,
  setRefetchedCredentials,
  clearCredentials,
} = authSlice.actions;
