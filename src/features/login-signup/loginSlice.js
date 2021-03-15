import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

console.log("API: ", apiUrl);

export const auth = createAsyncThunk(
  "user/auth",
  async (authUser, thunkAPI) => {
    const { userName, password } = authUser;
    const response = await axios
      .post(`${apiUrl}login`, { userName, password })
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        return thunkAPI.rejectWithValue(error.response.data.error);
      });

    return response;
  }
);
export const signUp = createAsyncThunk(
  "user/signup",
  async (user, thunkAPI) => {
    console.log("user from signup_slice: ", user);
    const { displayName, userName, password } = user;
    const response = await axios
      .post(`${apiUrl}signup`, { displayName, userName, password })
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        return thunkAPI.rejectWithValue(error.response.data.error);
      });

    return response;
  }
);

const initialState = {
  user: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).user
    : null,
};

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // call Auth API here
      const authUser = { ...action.payload };

      console.log("auth: ", authUser);
      const { resUser, error } = {};
      console.log("resUser: ", resUser);
      console.log("error: ", error);

      if (resUser) {
        state.user = { ...resUser };
        state.error = null;
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            user: { ...resUser },
            error: null,
          })
        );
      } else {
        state.user = null;
        state.error = error;
      }
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("currentUser");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [auth.fulfilled]: (state, action) => {
      console.log("extraReducer Fullfilled: ", action.payload);
      state.user = { ...action.payload };
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          user: { ...action.payload },
          error: null,
        })
      );
    },
    [auth.rejected]: (state, action) => {
      console.log("extraReducer Rejected: ", action.payload);
      state.error = action.payload;
    },
    [signUp.fulfilled]: (state, action) => {
      console.log("extraReducer Fullfilled: ", action.payload);
      state.user = { ...action.payload };
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          user: { ...action.payload },
          error: null,
        })
      );
    },
    [signUp.rejected]: (state, action) => {
      console.log("extraReducer Rejected: ", action.payload);
      state.error = action.payload;
    },
  },
});

export const { logout, clearError } = loginSlice.actions;

export default loginSlice.reducer;
