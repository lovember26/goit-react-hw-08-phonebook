import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const instance = axios.create({
//   baseUrl: 'https://connections-api.herokuapp.com',
// });
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const delToken = () => {
  delete axios.defaults.headers.common.Authorization;
};
// export const signUp = async body => {
//   return await axios.post('/users/signup', body);
// };
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', user);

      setToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = async body => {
  const { data } = await axios.post('/users/login', body);
  setToken(data.token);

  return data;
};

export const getUser = async () => {
  const { data } = await axios.get('/users/current');

  return data;
};
