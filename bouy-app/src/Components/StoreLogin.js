import React, { useState } from "react";
import "./StoreLogin.css";
import bouycut from "../Images/bouycut.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function StoreLogin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/store");
      })
      .catch((error) => alert(error.message, "trouble logging in"));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/store");
        }
      })
      .catch((error) => alert(error.message, "error registering"));
  };

  return (
    <div className="login">
      <Link to="/store">
        <img className="loginLogo" src={bouycut} alt="logo" />
      </Link>
      <div className="logininContainer">
        <h1>Sign In</h1>
        <form>
          <h4>Email </h4>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>Password </h4>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="loginSigninButton">
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to Bouy's conditions of use & understand that
          a portion of your proceeds will be donated to charirty
        </p>
        <button type="submit" onClick={register} className="loginSigninButton">
          {" "}
          Create Healer Account{" "}
        </button>
      </div>
    </div>
  );
}

export default StoreLogin;
