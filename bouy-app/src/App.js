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
import Orders from "./Components/Orders";
import ChatPage from "./Pages/ChatPage";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51I3HYtAtOXsh2jbLYPQlUFZtgkvxpufRkkAJbtZqhz2IrMAfIgdsXpWllCLEwBTgZlvkQJatjsn2MkJUt5lfHGsq00rDOyTDx4"
);

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
          <Route path="/home">
            <Header />
            <Resource />
          </Route>

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
            <ChatPage />
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

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Elements stripe={promise}>
            <Route path="/payment">
              <Payment />
            </Route>
          </Elements>

          <Route path="/">
            {/* null because must be last and promise mutes anything below it*/}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
