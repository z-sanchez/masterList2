import React from "react";
import "../src/index.css";
import Header from "../src/Header";

function App() {
  return (
    <div id="appWrapper">
      <Header />
      <aside id="aside"></aside>
      <div id="taskDisplay"></div>
      <div className="scrollAndAdd"></div>
    </div>
  );
}

export default App;
