import React from "react";
import PropTypes from "prop-types";
import LoginForm from "./components/loginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./loginSlice";
import { Redirect } from "react-router-dom";

Login.propTypes = {};

function Login(props) {
  const currentUser = useSelector((state) => state.currentUser.user);
  const dispatch = useDispatch();
  console.log(currentUser);

  // save Auth user to state.user
  const loginHandler = (user) => {
    dispatch(login(user));
  };

  return (
    <div>
      {currentUser ? <Redirect to="/room" /> : null}

      <LoginForm setLogin={loginHandler} />
    </div>
  );
}

export default Login;
