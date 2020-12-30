import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Store from "./Components/Store";
import Checkout from "./Components/Checkout";
import ResourceCiv from "./Components/ResourceCiv";
import ResourceVet from "./Components/ResourceVet";
import Resource from "./Components/Resource";
import ResourceFr from "./Components/ResourceFr";
import StoreLogin from "./Components/StoreLogin";
import Payment from "./Components/Payment";
import ChatPage from "./Pages/ChatPage";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER SIGNED IN", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/civ">
            <Header />
            <ResourceCiv />
          </Route>

          <Route path="/vet">
            <Header />
            <ResourceVet />
          </Route>

          <Route path="/first">
            <Header />
            <ResourceFr />
          </Route>

          <Route path="/chat">
           
            <ChatPage/>
          </Route>

          <Route path="/store">
            <Header />
            <Store />
          </Route>
          <Route path="/login">
            <StoreLogin />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Payment />
          </Route>

          <Route path="/">
            <Header />
            <Resource />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
