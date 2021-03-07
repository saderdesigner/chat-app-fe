import React from "react";
import PropTypes from "prop-types";
import Message from "../../components/message/message";

import "./chatBody.scss";

ChatBody.propTypes = {};

function ChatBody(props) {
  return (
    <div className="chat-body-container">
      <Message />
      <Message isMyMessage />
    </div>
  );
}

export default ChatBody;
