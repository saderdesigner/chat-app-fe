import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SignUpForm from "./components/signupForm";
import "./login.scss";
import { signUp } from "./loginSlice.js";

SignUp.propTypes = {};

function SignUp(props) {
  const currentUser = useSelector((state) => state.currentUser.user);
  const dispatch = useDispatch();
  console.log(currentUser);

  // save Auth user to state.user
  const signUpHandler = (user) => {
    dispatch(signUp(user));
  };

  return (
    <div className="login-form-container">
      {currentUser ? <Redirect to="/room" /> : null}

      <SignUpForm setSignUp={signUpHandler} />
    </div>
  );
}

export default SignUp;
