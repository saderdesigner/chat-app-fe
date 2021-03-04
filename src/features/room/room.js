import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

Room.propTypes = {};

function Room(props) {
  const currentUser = useSelector((state) => state.currentUser.user);
  return (
    <div>
      {!currentUser ? <Redirect to="/login" /> : null}
      <div>Room Pages</div>
    </div>
  );
}

export default Room;
