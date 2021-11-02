import React from "react";
import "../css/index.css";
import Header from "./Header";
import Aside from "./Aside";
import TaskDisplay from "./TaskDisplay";

class App extends React.Component {
  createYear(yearNumber) {
    var year = { name: yearNumber, monthArray: [] };
    year = this.createMonths(year);
    return year;
  }

  createMonths(year) {
    let monthStructure = { month: null, year: null, dayArray: [] };
    for (let i = 0; i < 12; i++) {
      let month = monthStructure.cloneNode(true);
      month.month = i + 1;
      month.year = year.name;
      month.dayArray = this.createDays(month);
      year.monthArray[i] = month;
    }

    return year;
  }

  createDays(month) {
    let dayStructure = {
      date: null,
      numberOfTask: 0,
      taskArray: [],
      finishedTasks: [],
      prevDay: null,
      nextDay: null,
    };
    let prevDay = null;

    if (
      month.month == 0 ||
      month.month == 2 ||
      month.month == 4 ||
      month.month == 6 ||
      month.month == 7 ||
      month.month == 9 ||
      month.month == 11
    ) {
      for (let i = 0; i < 31; i++) {
        let day = dayStructure.cloneNode("true");
        day.date = { month: month.month, day: i, year: month.year };
        //set up nodes pointing to each other for prev and next day (beginning adn end of month should be null)
        if (prevDay != null) {
          day.prev = prevDay;
          prevDay.nextDay = day;
        }
        prevDay = day;

        month.dayArray[i] = day;
      }
      //add new month if statements
      //don't repeat for code loop. Set up looping variable for i to compare to
      //handle leap year
    }
  }

  render() {
    return (
      <div id="appWrapper">
        <Header />
        <Aside />
        <TaskDisplay />
      </div>
    );
  }
}

export default App;
