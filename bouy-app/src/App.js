import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import "./App.css";
import Pusher from "pusher-js";
import axios from "./axios";

function ChatPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("f388c71f5112930a165b", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="appBody">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default ChatPage;





