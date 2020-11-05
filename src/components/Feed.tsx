import React, { Component } from "react";
import FeedPersonElement from "./FeedPersonElement";
import fetchDataUnsplashAPI from "../services/fetchDataAPI";
import { PersonInfo } from "../types";

interface IProps {}

interface IState {
  peopleFeedInfo: Array<PersonInfo>;
}

class Feed extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      peopleFeedInfo: Array<PersonInfo>(),
    };
  }

  // not sure how to do here... we cannot update the state with a Promise value it seems...
  // should we pass to fetchDataUnsplashAPI() a callback function to update the state?
  componentDidMount() {
    let peopleFeedInfo = fetchDataUnsplashAPI();
    this.setState({
      peopleFeedInfo: peopleFeedInfo,
    });
  }

  render() {
    return (
      <div id="feed">
        {this.state.peopleFeedInfo.map((person) => (
          <FeedPersonElement key={person.image} personInfo={person} />
        ))}
      </div>
    );
  }
}

export default Feed;
