import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import FeedPage from "./FeedPage";
import FavoritesPage from "./FavoritesPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites Page</Link>
          </li>
        </ul>

        <Route exact path="/" component={FeedPage} />
        <Route path="/favorites" component={FavoritesPage} />

        <Footer />
      </Router>
    );
  }
}

export default App;
