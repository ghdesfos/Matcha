import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/App.css";
import Header from "./Header";
import Footer from "./Footer";
import FeedPage from "./FeedPage";
import FavoritesPage from "./FavoritesPage";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Route exact path="/" component={FeedPage} />
        <Route path="/favorites" component={FavoritesPage} />

        <Footer />
      </Router>
    );
  }
}

export default App;
