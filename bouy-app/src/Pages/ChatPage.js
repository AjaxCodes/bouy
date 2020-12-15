import React from "react";
import Chat from "../Components/Chat";
import "../chatpage.css";
import Header from '../Components/Header';
import SidebarChat from "../Components/SidebarChat";


function ChatPage() {
  

  return (
    <div >
      <Header/>
      <div className="chatBody">
        <SidebarChat/>
        <Chat />
      </div>
    </div>
  );
}

export default ChatPage;