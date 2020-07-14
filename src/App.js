import React from "react";
import "./index.css";
import Content from "./components/Content";
import Drawers from "./images/drawers.jpg";

function App() {
  return (
    <div className="card">
      <div className="aside">
        <img className="main-image" src={Drawers} alt="drawers" />
      </div>
      <Content />
    </div>
  );
}

export default App;
