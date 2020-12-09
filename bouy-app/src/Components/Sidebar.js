import React from "react";
import "../Components/Sidebar.css";
import PersonIcon from "@material-ui/icons/Person";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import SidebarChat from "../Components/SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <PersonIcon />
        <div className="sidebarHeaderRight">
          
        </div>
      </div>
      <div className="sidebarSearch">
        <div className="searchContainer">
          <FindReplaceIcon />
          <input placeholder="Search for a room, or start a new chat" />
        </div>
      </div>
      <div className="sidebarChats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
