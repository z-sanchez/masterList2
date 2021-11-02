import React from "react";
import "../css/index.css";

class Calendar extends React.Component {
  fillCalendar() {
    let newRows = [];

    for (let i = 0; i < 6; ++i) {
      newRows[i] = (
        <div className="calendarGrid__week" key={i}>
          <p className="calendarGrid__point">{i}</p>
          <p className="calendarGrid__point">{i}</p>
          <p className="calendarGrid__point">{i}</p>
          <p className="calendarGrid__point">{i}</p>
          <p className="calendarGrid__point">{i}</p>
          <p className="calendarGrid__point">{i}</p>
          <p className="calendarGrid__point">{i}</p>
        </div>
      );
    }
    return newRows;
  }

  render() {
    return (
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
          {this.fillCalendar()}
        </div>
      </div>
    );
  }
}

export default Calendar;
