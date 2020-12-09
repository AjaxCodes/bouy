import React from "react";
import "../Components/Chat.css";
import bouycut from "../Images/bouycut.png";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import { IconButton } from "@material-ui/core";
import AttachmentIcon from "@material-ui/icons/Attachment";
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
            <FindReplaceIcon />
          </IconButton>
          <IconButton>
            <AttachmentIcon />
          </IconButton>
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
    </div>
  );
}

export default Chat;
