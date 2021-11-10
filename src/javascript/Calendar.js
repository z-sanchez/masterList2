import React from "react";
import { DateContext } from "../javascript/context";
import { printHeaderDate, findFirstOfMonth } from "./dateFormatting";
import "../css/index.css";

class Calendar extends React.Component {
  static contextType = DateContext;
  constructor(props) {
    super(props);
    this.state = {
      currentDay: {
        date: { month: "Month", day: 0, year: 0 },
        dayOfWeek: "weekday",
      },
      years: [null],
    };
  }

  componentDidMount() {
    let contextData = this.context;
    this.setState({
      currentDay: {date: {day: 6, month: 10, year: 2021}, dayOfWeek: "Wednesday"},
      years: contextData.year,
    });
  }

  fillCalendar() {
    let newRows = [],
      weekdays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      startOfMonth = findFirstOfMonth(
        this.state.currentDay.dayOfWeek,
        this.state.currentDay.date.day
      ),
      nodeDates = [],
      prevDateNode = null;

    let daysBeforeMonth = weekdays.indexOf(startOfMonth);
    let startOfMonthNode = getDateNode(
      this.state.years[0],
      this.state.currentDay.date.month - 1,
      0
    );

    prevDateNode = startOfMonthNode;

    for (let i = 0; i < daysBeforeMonth; ++i) {
      //fill nodeDates with previous month's dates to be rendered
      nodeDates[i] = prevDateNode.prevDay.date;
      prevDateNode = prevDateNode.prevDay;
    }
    nodeDates = nodeDates.reverse();
   

    for (let i = 0; i < 42; ++i) {
      //edit counter. we want nodeDates to equal 42 by the end. Add rest of dates here
      console.log();
    }

    //render the calendar with found odeDates here
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
          <p id="calendarHeader__date">
            {printHeaderDate(
              this.state.currentDay.date.month,
              this.state.currentDay.date.year
            )}
          </p>
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

function getDateNode(yearArray, month, day) {
  if (yearArray == null) return;
  let node = yearArray.monthArray[month].dayArray[day];
  return node;
}
