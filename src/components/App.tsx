import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Feed from "./Feed";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Feed />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
