import React from "react";
import "../src/index.css";
import logo from "../src/logo.png";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div id="headerFlex">
          <img src={logo} id="logo"></img>
          <p id="timeDisplay">8:20pm</p>
        </div>
      </header>
    );
  }
}

export default Header;
