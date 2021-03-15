import { FormControl, FormHelperText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../loginSlice";
import "./loginForm.scss";

LoginForm.propTypes = {
  setLogin: PropTypes.func,
  setLogout: PropTypes.func,
};

LoginForm.defaultProps = {
  setLogin: null,
  setLogout: null,
};

function LoginForm(props) {
  const { setLogin } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const userError = useSelector((state) => state.currentUser.error);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const submitHandler = async (e) => {
    // e.preventDefault();

    // call API to Auth
    if (!setLogin) return;

    await setLogin({
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
          Sign in
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
            id="username"
            label="User Name"
            name="username"
            autoFocus
            onChange={handleChange}
            onFocus={focusHandler}
            value={username}
            error={!!errors.username}
            inputRef={register({
              required: "You must provide the username!",
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
          <FormControl error={userError ? true : false} className="form-error">
            <FormHelperText>{userError ? userError : null}</FormHelperText>
          </FormControl>

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default LoginForm;
