import React, { Component } from "react";
import FeedPersonElement from "./FeedPersonElement";
import fetchDataUnsplashAPI from "../services/fetchDataAPI";
import { PersonInfo } from "../types/types";

interface FeedPageProps {}

interface FeedPageState {
  personInfoList: PersonInfo[];
}

class FeedPage extends Component<FeedPageProps, FeedPageState> {
  constructor(props: FeedPageProps) {
    super(props);
    this.state = {
      personInfoList: [],
    };
  }

  componentDidMount() {
    fetchDataUnsplashAPI().then((personInfoList) => {
      this.setState({
        personInfoList,
      });
    });
  }

  render() {
    // We should display some error message if there is no element to display on the feed
    if (this.state.personInfoList.length == 0)
      // the message below is shown before the state is updated during componentDidUpdate()
      // is there a way to avoir this?
      return <p>There is no element to display on the feed</p>;
    else
      return (
        <div id="feed">
          {this.state.personInfoList.map((person) => (
            <FeedPersonElement key={person.image} personInfo={person} />
          ))}
        </div>
      );
  }
}

export default FeedPage;
