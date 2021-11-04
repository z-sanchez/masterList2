import React from "react";
import { DateContext } from "../javascript/context";
import "../css/index.css";

class Calendar extends React.Component {
  static contextType = DateContext;
  constructor(props) {
    super(props);
    this.state = {
      currentDay: null,
    };
  }

  componentDidMount() {
    this.setState({
      currentDay: this.context,
    });
  }

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
    let header = "";
    if (this.state.currentDay != null) { header = String(this.state.currentDay.date.month);}
    return (
      <div id="calendar">
        <div id="calendarHeader" className="calendarHeader--background">
          <p id="calendarHeader__date">{header}</p>
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
