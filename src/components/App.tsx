import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "../css/App.css";
import Header from "./Header";
import Footer from "./Footer";
import FeedPage from "./FeedPage";
import FavoritesPage from "./FavoritesPage";
import store from "../redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />

          <Route exact path="/" component={FeedPage} />
          <Route path="/favorites" component={FavoritesPage} />

          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
