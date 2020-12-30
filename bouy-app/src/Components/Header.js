import React from "react";
import "./Header.css";
import bouycut from "../Images/bouycut.png";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import PolicyIcon from "@material-ui/icons/Policy";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentification = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="headerLogo">
        <img src={bouycut} alt="logo" />
      </div>
      <div className="headerIcons">
        <Link to="/home">
          <MoodBadIcon />
        </Link>
        <Link to="/civ">
          <div className="headerIcons">
            <PersonIcon />
          </div>
        </Link>
        <Link to="/vet">
          <div className="headerIcons">
            <PolicyIcon />
          </div>
        </Link>
        <Link to="/first">
          <div className="headerIcons">
            <LocalHospitalIcon />
          </div>
        </Link>
      </div>
      <Link to="/chat">
        <div className="headerCenter">
          <h1>Chat</h1>
        </div>
      </Link>
      <div className="headerLeft">
        <Link to="/store">
          <h1>Storefront</h1>
        </Link>

        <Link to={!user && "/login"}>
          <div onClick={handleAuthentification} className="headerLeft">
            <h3>{user ? "Sign Out"  : "Sign In"}</h3>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="headerLeft">
            <ShoppingCartIcon />
            {basket?.length}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
