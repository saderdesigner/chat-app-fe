import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextField, withStyles } from "@material-ui/core";
import "./chatInput.scss";

ChatInput.propTypes = {};

const CustomTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: `10px 0 0 10px`,
        backgroundColor: "white",
      },
    },
  },
})(TextField);

function ChatInput(props) {
  const [message, setMessage] = useState();

  const sendMessage = (event) => {
    event.preventDefault();

    console.log("Sent message: ", message);
    setMessage("");
  };

  const handleTextFieldChange = (event) => {
    const messageValue = event.target.value;
    console.log(messageValue);
    setMessage(messageValue);
  };
  return (
    <form className="chat-input-form" noValidate onSubmit={sendMessage}>
      <div className="input-conatainer">
        <CustomTextField
          variant="outlined"
          required
          id="chat-input"
          label="Chat input"
          name="chat-input"
          autoFocus
          className="chat-input"
          size="medium"
          fullWidth
          onChange={handleTextFieldChange}
          value={message}
        />
      </div>

      <div className="button-container">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="chat-button"
          fullWidth
        >
          Send
        </Button>
      </div>
    </form>
  );
}

export default ChatInput;
