import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, login } from 'services/auth';

export const loginThunk = createAsyncThunk('auth/login', async body => {
  return await login(body);
});

export const userThunk = createAsyncThunk('auth/user', async () => {
  return await getUser();
});
