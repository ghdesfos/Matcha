import React, { Component } from "react";
import FeedPersonElement from "./FeedPersonElement.tsx";

class Feed extends Component {
  // private keyword does not work
  queryUrlAPI: string =
    "https://api.unsplash.com/photos?query=person&count=10&client_id=xqlm32QRXwUNWsYKSXoNhKj9dKvE83hGgRNHK32H2d4";

  constructor() {
    super();

    this.state = {
      peopleFeedInfo: [],
    };
  }

  hydratePeopleFeedInfo(photos: object): any {
    let possibleNames = ["Sophie", "Jasmine", "Emilie", "Alice"];
    let peopleFeedInfo = [];

    if (typeof photos !== "undefined")
      photos.map((photo) => {
        let personInfo = new Object();
        personInfo["name"] =
          possibleNames[Math.floor(Math.random() * possibleNames.length)];
        personInfo["image"] = photo.urls.small;
        peopleFeedInfo.push(personInfo);
      });

    this.setState({
      peopleFeedInfo: peopleFeedInfo,
    });
  }

  componentDidMount() {
    fetch(this.queryUrlAPI)
      .then((res) => res.json())
      .then((result) => this.hydratePeopleFeedInfo(result));

    //manage possible errors, and check the status code before...
  }

  render(): JSX.Element {
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
