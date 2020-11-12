import React, { Component } from "react";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Matcha</h1>
        <h2>Find your match</h2>
        <Navbar />
      </header>
    );
  }
}

export default Header;
