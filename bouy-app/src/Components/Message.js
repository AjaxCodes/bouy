import React from "react";
import "./Message.css";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt=""/>
      <div className="messageInfo">
        <h4>{user}{" "}
         <span className="messageTimestamp"> {new Date(timestamp?.toDate()).toUTCString()} </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
