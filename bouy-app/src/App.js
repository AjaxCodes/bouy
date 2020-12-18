import React from 'react';
import { Router } from "@reach/router";
import Basket from "./Pages/Basket";
import ProfilePage from "./Pages/ProfilePage";
import PayWindow from "./Pages/PayWindow";
import CivResource from "./Pages/CivResource";
import LandingPage from "./Pages/LandingPage";
import ChatPage from "./Pages/ChatPage";
import VetResource from "./Pages/VetResource";
import SignUpPage from "./Pages/SignUpPage";
import FrResource from "./Pages/FrResourse";
import StoreFront from "./Pages/StoreFront";




function App() {
  return (
    <div>
       <Router>
        <LandingPage path="/" /> 
        <CivResource path="/resource-civ" />
        <FrResource path="/resource-fr" />
        <VetResource path="/resource-vet" />
        <SignUpPage path="/signUp" />
        <ProfilePage path="/profile" />
        <ChatPage path="/chat" />
        <StoreFront path="/store" />
        <Basket path="/basket" />
        <PayWindow path="/pay" />
      </Router>
    

      
    </div>
  )
}

export default App;
