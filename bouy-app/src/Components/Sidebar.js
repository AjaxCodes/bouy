import React from "react";
import "../Components/Sidebar.css";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import SidebarChat from "../Components/SidebarChat";
import AccountBoxIcon from "@material-ui/icons/AccountBox";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <AccountBoxIcon />
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
        <SidebarChat addNewChat/>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
