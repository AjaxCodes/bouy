import React from "react";
import Chat from "../Components/Chat";
import "../chatpage.css";
import Header from '../Components/Header';


function ChatPage() {
  

  return (
    <div >
      <Header/>
      <div className="chatBody">
        
        <Chat />
      </div>
    </div>
  );
}

export default ChatPage;