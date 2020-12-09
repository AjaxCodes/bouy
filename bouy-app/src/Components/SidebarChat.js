import React from "react";
import "../Components/SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <div classname="sidebarChatInfo">
        <h2> Room Name </h2>
        <p>last message sent </p>
      </div>
    </div>
  );
}

export default SidebarChat;
