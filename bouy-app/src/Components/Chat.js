import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import db from "../firebase";
import Message from "./Message"

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
      .orderBy("timeStamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  console.log(roomDetails);
  console.log("Messages", roomMessages);

  return (
    <div classname="chat">
      <h2>you are in the {roomId} room</h2>
      <div className="chatHeader">
        <div className="chatHeaderLeft">
          <h4 classname="channelName">
            <strong> #{roomDetails?.name} </strong>
          </h4>
        </div>
      </div>
      <div classname="chatMessages">
        {roomMessages.map(({message, timestamp, user, userImage}) =>
          <Message 
          message={message}
          timestamp={timestamp}
          user={user}
          userImage={userImage}
          />
          
          )}

      </div>
    </div>
  );
}

export default Chat;
