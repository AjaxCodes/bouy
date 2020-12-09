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
        <img src={bouycut} />
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
    </div>
  );
}

export default Chat;
