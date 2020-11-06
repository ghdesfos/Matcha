import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import FeedPage from "./FeedPage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <FeedPage />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
