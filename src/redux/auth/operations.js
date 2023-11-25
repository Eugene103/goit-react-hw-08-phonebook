import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async newUser => {
    try {
        const responce = await axios.post('/users/signup', newUser);
        setAuthHeader(responce.data.token);
        Notiflix.Notify.success('Successful registration');
      return responce.data;
    } catch (error) {
      console.log(error)
        const err = error?.response?.data?.message;
        const emailErr = error?.response?.data?.keyPattern?.email;
        if (emailErr !== undefined) {
            if (emailErr >= 0) {
                    Notiflix.Notify.failure(`This email has already been registered`)
            }    
        }
        if (err !== undefined) {
            Notiflix.Notify.failure(err)
        }
      } 
      }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async credentials => {
    try {
      const responce = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(responce.data.token);
      return responce.data;
    } catch (error) {
      console.log(error)
      return Notiflix.Notify.failure(`Invalid Email or Password`)
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    console.log(error)
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);