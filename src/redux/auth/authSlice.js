import { signUp } from 'services/auth';
import { loginThunk, userThunk } from './thunk';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const initialState = {
  token: '',
  isLoading: false,
  error: '',
  user: null,
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handleFulfield = (state, { payload }) => {
  state.token = payload.token;
  state.isLoading = false;
  state.error = '';
};
const handleUserFulfield = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.user = payload;
};
const handleSignUpFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      state.user = null;
      state.token = '';
    },
  },

  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, handleSignUpFulfilled)
      .addCase(loginThunk.fulfilled, handleFulfield)
      .addCase(userThunk.fulfilled, handleUserFulfield)
      .addMatcher(isAnyOf(loginThunk.pending, userThunk.pending), handlePending)
      .addMatcher(
        isAnyOf(loginThunk.rejected, userThunk.rejected),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
