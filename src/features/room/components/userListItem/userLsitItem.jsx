import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./userListItem.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

UserListItem.propTypes = {
  displayName: PropTypes.string,
  imageUrl: PropTypes.string,
  me: PropTypes.bool,
};
UserListItem.defaultProps = {
  displayName: "",
  imageUrl: "",
  me: false,
};

function UserListItem(props) {
  const { displayName, imageUrl, me } = props;

  const className = classNames("user-list-item", {
    me: me,
  });
  return (
    <div className={className}>
      <div className="avatar-container">
        {imageUrl ? (
          <img src={imageUrl} alt="other-user-avatar" />
        ) : (
          <AccountCircleIcon />
        )}
      </div>

      <div className="title-text">{displayName}</div>
    </div>
  );
}

export default UserListItem;
