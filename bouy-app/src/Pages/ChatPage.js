import React from "react";
import "./chatPage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";

function ChatPage() {
  return (
    <div className="chatPage">
      <Router>
        <Header />
        <div className="chatPageBody">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>welcome</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default ChatPage;
