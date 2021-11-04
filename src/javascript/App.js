import React from "react";
import "../css/index.css";
import Header from "./Header";
import Aside from "./Aside";
import TaskDisplay from "./TaskDisplay";
import { DateContext } from "../javascript/context";
//import { createYear } from "./createCalendar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [],
      currentDay: {
        date: getCurrentDay(),
        dayOfWeek: "thursday",
      },
    };
  }

  render() {
    return (
      <div id="appWrapper">
        <Header />
        <DateContext.Provider value={this.state.currentDay}>
          <Aside />
        </DateContext.Provider>
        <TaskDisplay />
      </div>
    );
  }
}

export default App;

function getCurrentDay() {
  return {
    month: 11,
    day: 4,
    year: 2021,
  };
}

/*

Next Tasks: 

Build functioning calendar visual:
- Keep front end code to react, back end seperate JS files
- add functions to display days properly 
- darken days that aren't part of current month
- highlight current day selected
- Prepare for displaying two different years
- add arrows to navigate through months

Cosmestic changes:
- Align logo
- Add green marker as a flexbox child
- Fix slider

Day View Selectors
- Create css edits for different views
- Write it into back end code for Aside functions 

Add Task window:
- Create a form for add task window
- store task in database (mySQL)
- probably need to implement node.js to create front end and back end stuff

Weather and Time module:
- Find APIs and makes code

Other:
- add comments

*/
