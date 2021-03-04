import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/login/loginSlice.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

function Navigation() {
  const dispatch = useDispatch();
  const classes = useStyles();
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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Chat App
          </Typography>
          {currentUser ? (
            <Button color="secondary" onClick={logoutHandler}>
              Log Out
            </Button>
          ) : (
            <Button component={Link} color="inherit" to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
