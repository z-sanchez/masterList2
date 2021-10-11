import React from "react";
import "../css/index.css";
import oneView from "../images/oneView.svg";
import allView from "../images/allView.svg";
import trashView from "../images/trashView.svg";
import toggledOn from "../images/toggledOn.svg";
import Header from "./Header";

function App() {
  return (
    <div id="appWrapper">
      <Header />
      <aside id="aside">
        <div id="oneViewSelector" className="viewSelector viewSelector--purple">
          <p className="viewSelector__name">1 Day</p>
          <img
            src={oneView}
            alt="oneView"
            className="viewSelector__image"
          ></img>
          <img src={toggledOn} alt="on" className="viewSelector--on"></img>
        </div>
        <div id="oneViewSelector" className="viewSelector viewSelector--blue">
          <p className="viewSelector__name">All</p>
          <img
            src={allView}
            alt="oneView"
            className="viewSelector__image"
          ></img>
        </div>
        <div id="oneViewSelector" className="viewSelector viewSelector--pink">
          <p className="viewSelector__name">Trash</p>
          <img
            src={trashView}
            alt="oneView"
            className="viewSelector__image"
          ></img>
        </div>
        <div id="calendar">
          <div id="calendarHeader" className="calendarHeader--background">
            <p id="calendarHeader__date">October 2021</p>
          </div>
          <div id="calendarGrid">
            <div id="weekHeadings">
              <p
                className="calendarGrid__point calendarGrid__point--weekHeading"
                id="monday"
              >
                M
              </p>
              <p
                className="calendarGrid__point calendarGrid__point--weekHeading"
                id="monday"
              >
                T
              </p>
              <p
                className="calendarGrid__point calendarGrid__point--weekHeading"
                id="monday"
              >
                W
              </p>
              <p
                className="calendarGrid__point calendarGrid__point--weekHeading"
                id="monday"
              >
                T
              </p>
              <p
                className="calendarGrid__point calendarGrid__point--weekHeading"
                id="monday"
              >
                F
              </p>
              <p
                className="calendarGrid__point calendarGrid__point--weekHeading"
                id="monday"
              >
                S
              </p>
              <p
                className="calendarGrid__point calendarGrid__point--weekHeading"
                id="monday"
              >
                S
              </p>
            </div>
          </div>
        </div>
      </aside>
      <div id="taskDisplay"></div>
      <div className="scrollAndAdd"></div>
    </div>
  );
}

export default App;
