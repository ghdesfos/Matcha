import React, { Component } from "react";
import "./App.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Feed from "./Feed.tsx";

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
