import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/login-signup/loginSlice.js";
import "./nav.styles.scss";

function Navigation() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.user);

  const logoutHandler = () => {
    dispatch(logout());
  };

  // return (
  //   <nav className="nav-container">
  //     <Link to="/login" className="login">
  //       Login
  //     </Link>
  //     <button className="logout" onClick={logoutHandler}>
  //       Logout
  //     </button>
  //   </nav>
  // );

  return (
    <div className="nav-bar">
      <Typography variant="h6" className="nav-title">
        Chat App
      </Typography>
      {currentUser ? (
        <Button
          color="secondary"
          onClick={logoutHandler}
          className="nav-button"
          variant="outlined"
        >
          Log Out
        </Button>
      ) : (
        <Button
          component={Link}
          color="inherit"
          to="/login"
          className="nav-button"
          variant="outlined"
        >
          Login
        </Button>
      )}
    </div>
  );
}

export default Navigation;
