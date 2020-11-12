import React, { Component } from "react";
import FeedPersonElement from "./FeedPersonElement";
import fetchDataUnsplashAPI from "../services/fetchDataAPI";
import { PersonInfo } from "../types";

interface FeedProps {}

interface FeedState {
  personInfoList: Array<PersonInfo>;
}

class FeedPage extends Component<FeedProps, FeedState> {
  constructor(props: FeedProps) {
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
    });
  }

  render() {
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
