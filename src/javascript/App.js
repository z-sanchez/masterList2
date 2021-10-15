import React from "react";
import "../css/index.css";
import Header from "./Header";
import Aside from "./Aside";

function App() {
  return (
    <div id="appWrapper">
      <Header />
      <Aside />
      <div id="taskDisplay">
        <div className="taskDisplayDay">
          <div className="taskDisplayDay__nameDateContainer">
            <p className="taskDisplayDay__day">Monday</p>
            <p className="taskDisplayDay__date">10/4</p>
          </div>
          <div className="taskDisplayDay__taskRow">
            <div className="task">
              <img className="task__doneMarker--incomplete"></img>
              <p className="task__description"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="scrollAndAdd"></div>
    </div>
  );
}

export default App;
