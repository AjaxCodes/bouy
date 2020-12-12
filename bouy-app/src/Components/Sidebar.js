import React, {useState, useEffect}from "react";
import "../Components/Sidebar.css";
import FindReplaceIcon from "@material-ui/icons/FindReplace";
import SidebarChat from "../Components/SidebarChat";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import DB from '../Firebase';


function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    DB.collection('rooms').onSnapshot((snapshot) => 
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
      )
    );
  }, []);



  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <AccountBoxIcon />
        <div className="sidebarHeaderRight">
          
        </div>
      </div>
      <div className="sidebarSearch">
        <div className="searchContainer">
          <FindReplaceIcon />
          <input placeholder="Search for a room, or start a new chat" />
        </div>
      </div>
      <div className="sidebarChats">
        <SidebarChat addNewChat/>
        {rooms.map(room => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />

        ))}
      </div>
    </div>
  );
}

export default Sidebar;
