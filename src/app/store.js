import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userLogin from "../features/login-signup/loginSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    currentUser: userLogin,
  },
});
