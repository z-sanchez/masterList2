import React from "react";
import "../css/index.css";
import Header from "./Header";
import Aside from "./Aside";
import TaskDisplay from "./TaskDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: [],
    };
  }

  createYear(yearNumber) {
    if (this.state.year.length != 0) return;
    var year = { name: yearNumber, monthArray: [null] };
    year = this.createMonths(year);
    let array = this.state.year;
    array.push(year);
    console.log(year);

    this.setState({
      year: array,
    });
  }

  createMonths(year) {
    for (let i = 0; i < 12; i++) {
      let month = { month: null, year: null, dayArray: [null] };
      month.month = i + 1;
      month.year = year.name;
      year.monthArray[i] = month;
    }

    year.monthArray = this.createDays(year.monthArray);

    return year;
  }

  createDays(month) {
    let prevDay = null,
      dayNumber = null;

    for (let i = 0; i < 12; i++) {
      if (
        month[i].month == 1 ||
        month[i].month == 3 ||
        month[i].month == 5 ||
        month[i].month == 7 ||
        month[i].month == 8 ||
        month[i].month == 10 ||
        month[i].month == 12
      ) {
        dayNumber = 31;
      } else if (
        month[i].month == 4 ||
        month[i].month == 6 ||
        month[i].month == 9 ||
        month[i].month == 11
      ) {
        dayNumber = 30;
      } else if (month[i].month == 2) {
        if (month[i].year % 4 == 0) {
          dayNumber = 29;
        } else {
          dayNumber = 28;
        }
      }
      month[i].dayArray = [null];

      for (let j = 0; j < dayNumber; j++) {
        let day = {
          date: null,
          numberOfTask: 0,
          taskArray: [null],
          finishedTasks: [null],
          prevDay: null,
          nextDay: null,
        };
        day.date = { month: month[i].month, day: j + 1, year: month[i].year };
        if (prevDay != null) {
          day.prevDay = prevDay;
          prevDay.nextDay = day;
        }
        prevDay = day;
        month[i].dayArray[j] = day;
      }
    }
    return month;
  }
  //object assign is fucking everything up. Need to figure out if
  //only arrays are doing a deep copy or if it's eveyr variable.
  //also add days of the weeks. Read up on Object.assign()
  render() {
    return (
      <div id="appWrapper" onClick={() => this.createYear(2021)}>
        <Header />
        <Aside />
        <TaskDisplay />
      </div>
    );
  }
}

export default App;
