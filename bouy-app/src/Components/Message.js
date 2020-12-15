import React from "react";
import "./Message.css";

function Messages({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div classname="messageInfo">
        <h4>{user}{timestamp} </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Messages;
