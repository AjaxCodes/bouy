import React from "react";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="appBody">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
