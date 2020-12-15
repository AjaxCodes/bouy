import React from "react";
import Chat from "../Components/Chat";
import "../chatpage.css";
import Header from "../Components/Header";
import SidebarChat from "../Components/SidebarChat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function ChatPage() {
  return (
    <div className="chatPage">
      <Router>
        <Header />
        <div className="chatBody">
          <SidebarChat />
          <Switch>
            <Route path="/rooms/:room.id">
            <h1>welcome chat</h1>
              <Chat />
            </Route>
            <Route path="/chat">
              <h1>welcome</h1>
          </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default ChatPage;
