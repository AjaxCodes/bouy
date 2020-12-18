import React from "react";
import "./SidebarPanel.css";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import { useHistory } from "react-router-dom";
import db from "../firebase";

function SidebarPanel({ Icon, title, addChannelOption, id }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push("title");
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
      {Icon && <Icon className="SidebarPanelIcon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarPanelChanel">
          <span className="SideBarPanelStar">
            <DonutSmallIcon /> {title}{" "}
          </span>
        </h3>
      )}
    </div>
  );
}

export default SidebarPanel;
