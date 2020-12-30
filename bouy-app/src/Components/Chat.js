import React, { useEffect, useState } from "react";
import "./Chat.css";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { useParams } from "react-router-dom";
import db from "../firebase";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  console.log(roomDetails);
  console.log(roomMessages);

  return (
    <div className="chat">
      <div className="chatHeader">
        <div className="chatHeaderLeft">
          <h4 className="chatChannelName">
            <strong>
              <DonutSmallIcon />
              {roomDetails?.name}
            </strong>
          </h4>
        </div>
        <div></div>
      </div>

      <div className="ChatMessages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={'`${id}`'}/>
    </div>
  );
}

export default Chat;
