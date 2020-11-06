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
    // VERSION 1
    let peopleFeedInfo: Array<PersonInfo> = [];
    fetchDataUnsplashAPI().then((peopleFeedInfo) => {
      this.setState({
        peopleFeedInfo: peopleFeedInfo,
      });
      console.log("callback time", window.performance.now());
    });

    console.log("code continuation time", window.performance.now());

    // VERSION 2
    /*  let peopleFeedInfo: Promise<Array<PersonInfo>>;
    peopleFeedInfo = fetchDataUnsplashAPI();
    Promise.all([peopleFeedInfo]).then((peopleFeedInfo) => {
      console.log(peopleFeedInfo);

      this.setState({
        peopleFeedInfo: peopleFeedInfo[0],
      });
    });
    */
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
