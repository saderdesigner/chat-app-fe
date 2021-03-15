import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UserList from "./components/usersList/usersList";
import ChatInput from "./components/chatInput/chatInput";
import ChatBody from "./components/chatBody/chatBody";
import { USER_IN_ROOM } from "../../app/user_in_room";

import "./room.scss";

Room.propTypes = {};

const fakeOtherUser = USER_IN_ROOM.slice(0, 10);

function Room(props) {
  const currentUser = useSelector((state) => state.currentUser.user);
  return (
    <div className="room">
      {!currentUser ? (
        <Redirect to="/login" />
      ) : (
        <div className="room-container">
          <div className="side-bar">
            <UserList currentUser={currentUser} otherUsers={fakeOtherUser} />
          </div>
          <div className="right-col">
            <div className="chat-body-container">
              <ChatBody />
            </div>
            <div className="chat-input-container">
              <ChatInput />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Room;
