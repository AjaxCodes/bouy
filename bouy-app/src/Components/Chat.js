import React, { useState } from "react";
import "../Components/Chat.css";
import bouycut from "../Images/bouycut.png";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import axios from "../axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "",
      timestamp: "dt",
      recieved: false,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chatHeader">
        <img src={bouycut} alt="logo" />
        <div className="chatHeaderInfo">
          <h3> Room Name </h3>
          <p>Last seen at ... </p>
        </div>
        <div className="chatHeaderRight">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chatBody">
        {messages.map((message) => (
          <p className={`chatMessage ${message.recieved && "chatReciever"}`}>
            <span className="chatName">{message.name}</span>
            {message.message}
            <span className="chatTimestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chatFooter">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            {" "}
            Send a message{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
