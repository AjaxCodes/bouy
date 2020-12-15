import React from "react";
import "./SidebarPanel.css";
import { useHistory } from "react-router-dom";
import db from "../firebase";

function SidebarPanel({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/rooms/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please, enter the name of your new chat room");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarPanel"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className=" sidebarPanelIcon" />}
      {Icon ? (
        <h3> {title}</h3>
      ) : (
        <h3 className="sidebarPanelChannel">
          <span className="sidebarPanelHash">#{title}</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarPanel;
