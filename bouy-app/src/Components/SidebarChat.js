import React from "react";
import "./SidebarChat.css";
import SidebarPanel from "./SidebarPanel";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function SidebarChat() {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <div className="sidebarInfo">
          <h2> BOUY </h2>
          <h3>
            <FiberManualRecordIcon />
            AjaxCodes
          </h3>
        </div>
        <AddCircleIcon />
      </div>
      
      <SidebarPanel Icon={ExpandMoreIcon} title="Chats"/>
      <hr/>
      <SidebarPanel Icon={AddIcon} title="Rooms"/>
     <hr/>
    </div>
  );
}

export default SidebarChat;
