import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarPanel from "./SidebarPanel";
import db from "../firebase";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AddBoxIcon from "@material-ui/icons/AddBox";


function Sidebar() {
  const [channels, setChannels] = useState([]);

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
          <h2>AjaxCodes - Bouy</h2>
          <h3>
            <FiberManualRecordIcon />
            user
          </h3>
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
