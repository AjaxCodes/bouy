import React from "react";
import "./SidebarPanel.css";

function SidebarExtended({ Icon, title }) {
  return (
    <div className="sidebarPanel">
      {Icon && <Icon className=" sidebarPanelIcon" />}
      {Icon ? <h3> {title}</h3> : <h3 className="sidebarPanelChannel"><span className="sidebarPanelHash">#{title}</span></h3>}
    </div>
  );
}

export default SidebarExtended;
