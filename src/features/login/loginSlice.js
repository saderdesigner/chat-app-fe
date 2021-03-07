import { createSlice } from "@reduxjs/toolkit";
import { userAuth } from "../../app/user_data";

const initialState = {user: localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).user
  : null};

// const initialState = {};

// console.log("init: ", localStorage.getItem("currentUser") ? true : false);
// console.log("init: ", initialState);

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // call Auth API here
      const authUser = { ...action.payload };

      console.log("auth: ", authUser);
      const { resUser, error } = userAuth(authUser);
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
        // console.log(
        //   JSON.stringify({
        //     user: { ...resUser },
        //     error: null,
        //   })
        // );
      } else {
        state.user = null;
        state.error = error;
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
