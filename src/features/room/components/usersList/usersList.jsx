import React from "react";
import PropTypes from "prop-types";
import UserListItem from "../userListItem/userLsitItem";

import "./usersList.scss";

UserList.propTypes = {
  otherUsers: PropTypes.array,
  currentUser: PropTypes.object,
};
UserList.defaultProps = {
  otherUsers: [],
  currentUser: {
    id: "",
    displayName: "",
    imageUrl: "",
  },
};

function UserList(props) {
  const { otherUsers, currentUser } = props;
  console.log("currentUser from userList: ", currentUser);
  return (
    <div className="user-list-container">
      <UserListItem
        displayName={currentUser.displayName}
        imageUrl="https://www.w3schools.com/howto/img_avatar.png"
        me
      />
      {otherUsers.map((otherUser) => {
        return otherUser.id !== currentUser.id ? (
          <UserListItem
            key={otherUser.id}
            displayName={otherUser.displayName}
            imageUrl={otherUser.imageUrl}
          />
        ) : null;
      })}
    </div>
  );
}

export default UserList;
