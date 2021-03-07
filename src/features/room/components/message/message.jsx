import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./message.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

Message.propTypes = {
  isMyMessage: PropTypes.bool,
  message: PropTypes.object,
};

Message.defaultProps = {
  isMyMessage: false,
  message: {
    messageText: "This is default message text",
    createdAt: "10:20:30",
  },
};

function Message(props) {
  const { isMyMessage, message } = props;
  const messageClass = classNames("message-container", {
    "my-message": isMyMessage,
    "other-message": !isMyMessage,
  });

  const [showTime, setShowTime] = useState(false);

  //   const imageThumbnail = isMyMessage ? null : <img src={message.imageUrl} alt={message.imageAlt} />;
  const imageThumbnail = isMyMessage ? null : (
    <AccountCircleIcon className="message-avatar" />
  );

  const showMessageTime = () => {
    setShowTime(!showTime);
  };

  return (
    <div className={messageClass}>
      <div className="message-content">
        {imageThumbnail}
        <div className="message-text" onClick={showMessageTime}>
          <div>{message.messageText}</div>
          {showTime ? (
            <div className="message-time">{message.createdAt}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Message;
