import React from "react";
import "./ChatPage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import ChatLogIn from "../Components/ChatLogIn";
import { useStateValue } from "../StateProvider";

function ChatPage() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="chatPage">
      <Router>
        {!user ? (
          <ChatLogIn/>
        ) : (
          <>
            <Header />
            <div className="chatPageBody">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/chat">
                  <h1>welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default ChatPage;
