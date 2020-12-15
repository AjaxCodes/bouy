import React, { useEffect } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import db from "../Firebase";

function Chat() {
  const { roomId } = useParams();

  useEffect(() => {

  }, [roomId])







  return (
    <div classname="chat">
      <div className="chatHeader">
        <div className="chatHeaderLeft">
          <h3 classname="channelName">
            <strong> #  </strong>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Chat;
