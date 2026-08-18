import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = false
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null,
        state.isLoggedIn = false
    },
  }
})

export const { login, logout, signUp } = authSlice.actions;

export default authSlice.reducer;