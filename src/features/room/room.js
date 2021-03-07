import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import UserList from "./components/usersList/usersList";
import ChatInput from "./components/chatInput/chatInput";
import ChatBody from "./components/chatBody/chatBody";

import "./room.scss";

Room.propTypes = {};

const fakeOtherUser = [
  {
    id: "f79d05d1-692e-4311-8e6c-bf250ef6c532",
    displayName: "Brade Dobrowolski",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: "26deba9e-972f-41d4-95c9-7ba046bbf9e5",
    displayName: "Ignazio Mollison",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: "cdfd5ed6-e943-4d64-ad1f-b87b3d5fd684",
    displayName: "Dolly Belvin",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: "7a867d77-9dcb-4a19-a9ee-81184c4ebf22",
    displayName: "Krispin Nossent",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: "fecb36ca-f620-41bb-9496-3b77338f7ef0",
    displayName: "Iolande Klimschak",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: "e4e63a9c-c59f-4ef6-b2b1-5826ef78b392",
    displayName: "Florinda Fassum",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: "8637de0d-cf64-4032-a1e4-37807a531e4a",
    displayName: "Aubrey Izatt",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: "6eb23ed3-d75f-4560-a394-e21404e88241",
    displayName: "Marcie Baccus",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: "f823fe53-1937-4840-8313-652cf900793d",
    displayName: "Fionna Scrogges",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: "9ef3b6bc-e19b-4dba-bb8a-14c5479bd984",
    displayName: "Sader",
    imageUrl: "https://www.w3schools.com/howto/img_avatar.png",
  },
];

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
