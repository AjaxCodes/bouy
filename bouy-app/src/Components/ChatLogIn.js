import React from "react";
import "./ChatLogIn.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import bouycut from "../Images/bouycut.png";


function ChatLogIn() {

  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      })
  };

  return (
    <div className="chatLogIn">
      <div className="chatLogInContainer">
        <img src={bouycut} alt="logo" />
        <h1>Sign In to use the Bouy Chat</h1>
        <p>BouyChat.com</p>
        <Button onClick={signIn}> Sign In with Google</Button>
      </div>
    </div>
  );
}

export default ChatLogIn;
