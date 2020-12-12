import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../Components/SidebarChat.css";
import DB from "../Firebase";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("please enter a name for the chat");

    if (roomName) {
      DB.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChatInfo">
        <h2> {name}</h2>
        <p>last message </p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChatNew">
      <h2> create new Chat</h2>
    </div>
  );
}

export default SidebarChat;
