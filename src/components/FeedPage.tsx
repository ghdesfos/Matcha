import React, { Component } from "react";
import FeedPersonElement from "./FeedPersonElement";
import fetchDataUnsplashAPI from "../services/fetchDataAPI";
import { PersonInfo } from "../types";

interface FeedPageProps {}

interface FeedPageState {
  personInfoList: Array<PersonInfo>;
}

class FeedPage extends Component<FeedPageProps, FeedPageState> {
  constructor(props: FeedPageProps) {
    super(props);
    this.state = {
      personInfoList: Array<PersonInfo>(),
    };
  }

  componentDidMount() {
    fetchDataUnsplashAPI().then((personInfoList) => {
      this.setState({
        personInfoList: personInfoList,
      });
      console.log(this.state);
    });
  }

  render() {
    // We should display some error message if there is no element to display on the feed
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
