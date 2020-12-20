import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "@reach/router";
import bouycut from "../Images/bouycut.png";
import "./Header.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import PolicyIcon from "@material-ui/icons/Policy";
import PersonIcon from "@material-ui/icons/Person";

function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src={bouycut} alt="logo" />
      </div>
      <div className="headerRight">
        <MenuItem>
          <Link to="/">
            <MoodBadIcon />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/resource-civ">
            <PersonIcon />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/resource-vet">
            <PolicyIcon />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/resource-fr">
            <LocalHospitalIcon />
          </Link>
        </MenuItem>
      </div>
      <div className="headerCenter">
        <MenuItem>
          <Link to="/chat">Chat</Link>
        </MenuItem>
      </div>
      <div className="headerLeft">
        <MenuItem>
          <Link to="/store">StoreFront</Link>
        </MenuItem>
       
      

        </div>
        
    </div>
  );
}
export default Header;
