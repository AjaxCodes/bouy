import React from "react";
import "../Components/Chat.css";
import bouycut from "../Images/bouycut.png";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Chat() {
  return (
    <div className="chat">
      <div className="chatHeader">
        <img src={bouycut} alt="logo" />
        <div className="chatHeaderInfo">
          <h3> Room Name </h3>
          <p>Last seen at ... </p>
        </div>
        <div className="chatHeaderRight">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chatBody">
        <p className="chatMessage">
          <span className="chatName">AjaxCodes</span>
          this is a message
          <span className="chatTimestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chatMessage chatReciever">
          <span className="chatName ">SteveDave</span>
          this is a message
          <span className="chatTimestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chatFooter">
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit"> Send a message </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
