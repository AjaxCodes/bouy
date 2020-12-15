import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import SidebarPanel from "./SidebarPanel";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import db from "../firebase";


function SidebarChat() {
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
          <h2> BOUY </h2>
          <h3>
            <FiberManualRecordIcon />
            AjaxCodes
          </h3>
        </div>
        <AddCircleIcon />
      </div>

      <SidebarPanel Icon={ExpandMoreIcon} title="Chats" />
      <hr />
      <SidebarPanel  addChannelOption Icon={AddIcon} title="Add channel" />
  
      <hr />
      {channels.map((channel) => (
        <SidebarPanel title={channel.name} id={channel.id}/>
      ))}
    </div>
  );
}

export default SidebarChat;
