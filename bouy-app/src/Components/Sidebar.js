import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarPanel from "./SidebarPanel";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <div className="sidebarInfo">
          <Avatar alt="" src={user?.photoURL} />
          <h3> {user?.displayName}</h3>
        </div>
      </div>
      <SidebarPanel Icon={AddBoxIcon} addChannelOption title="Add New Chats" />
      <hr />
      {channels.map((channel) => (
        <SidebarPanel title={channel.name} id={channel.id} />
      ))}
      <hr />
    </div>
  );
}

export default Sidebar;
