import React, { Component } from "react";
import FeedPersonElement from "./FeedPersonElement";
import fetchDataUnsplashAPI from "../services/fetchDataAPI";
import { PersonInfo } from "../types/types";
import Loader from "react-loader-spinner";

interface FeedPageProps {}

interface FeedPageState {
  loading: boolean;
  personInfoList: PersonInfo[];
}

class FeedPage extends Component<FeedPageProps, FeedPageState> {
  constructor(props: FeedPageProps) {
    super(props);
    this.state = {
      loading: true,
      personInfoList: [],
    };
  }

  componentDidMount() {
    fetchDataUnsplashAPI().then((personInfoList) => {
      this.setState({
        personInfoList,
        loading: false,
      });
    });
  }

  render() {
    const { loading } = this.state;

    if (loading)
      return (
        <div className="spinner">
          <Loader type="Oval" color="#585858" height={50} width={50} />
        </div>
      );
    else if (this.state.personInfoList.length === 0)
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
