import { FormControl, FormHelperText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../loginSlice";
import "./loginForm.scss";

SignUpForm.propTypes = {
  setLogin: PropTypes.func,
  setLogout: PropTypes.func,
};

SignUpForm.defaultProps = {
  setLogin: null,
  setLogout: null,
};

function SignUpForm(props) {
  const { setSignUp } = props;
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  console.log(errors);

  const userError = useSelector((state) => state.currentUser.error);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "displayName") {
      setDisplayName(value);
    }
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "passwordConfirm") {
      setPasswordConfirm(value);
    }
  };

  const submitHandler = async (e) => {
    // e.preventDefault();

    // call API to Auth
    if (!setSignUp) return;

    await setSignUp({
      displayName: displayName,
      userName: username,
      password: password,
    });
  };

  const focusHandler = () => {
    dispatch(clearError());
  };

  return (
    <Container component="main" maxWidth="xs" className="login-form-container">
      <CssBaseline />
      <div className="paper">
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className="form"
          noValidate
          onSubmit={handleSubmit(submitHandler)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="displayName"
            label="Display Name"
            name="displayName"
            autoFocus
            onChange={handleChange}
            onFocus={focusHandler}
            value={displayName}
            error={!!errors.displayName}
            inputRef={register({
              required: "You must provide your display name!",
              minLength: {
                value: 6,
                message: "Display name must be greater than 6 characters",
              },
            })}
            helperText={errors.displayName ? errors.displayName.message : ""}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="User Name"
            name="username"
            onChange={handleChange}
            onFocus={focusHandler}
            value={username}
            error={!!errors.username}
            inputRef={register({
              required: "You must provide the username!",
              minLength: {
                value: 6,
                message: "Username must be greater than 6 characters",
              },
            })}
            helperText={errors.username ? errors.username.message : ""}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            onFocus={focusHandler}
            value={password}
            error={!!errors.password}
            inputRef={register({
              required: "You must provide the password!",
              minLength: {
                value: 6,
                message: "Your password must be greater than 6 characters",
              },
            })}
            helperText={errors.password ? errors.password.message : ""}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordConfirm"
            label="Password Confirm"
            type="password"
            id="passwordConfirm"
            autoComplete="current-password"
            onChange={handleChange}
            onFocus={focusHandler}
            value={passwordConfirm}
            error={!!errors.passwordConfirm}
            inputRef={register({
              required: "You must provide the password!",
              minLength: {
                value: 6,
                message: "Your password must be greater than 6 characters",
              },
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
            helperText={
              errors.passwordConfirm ? errors.passwordConfirm.message : ""
            }
          />
          <FormControl error={userError ? true : false} className="form-error">
            <FormHelperText>{userError ? userError : null}</FormHelperText>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default SignUpForm;
