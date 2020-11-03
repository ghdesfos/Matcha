import React, { Component } from "react";
import FeedPersonElement from "./FeedPersonElement.tsx";

class Feed extends Component {
  constructor() {
    super();
  }

  /* componentDidMount() {
      const queryUrlAPI = "https://api.unsplash.com/photos?query=person&count=10&client_id=xqlm32QRXwUNWsYKSXoNhKj9dKvE83hGgRNHK32H2d4";
      fetch(this.queryUrlAPI)
      //  .then(res => res)
        .then(result =>
          console.log(result)
        )
    }*/

  render(): JSX.Element {
    const peopleFeedInfo = [
      {
        name: "Sophie",
        image:
          "https://pbs.twimg.com/media/DfkhrO1XUAEYkdw?format=jpg&name=small",
      },
      {
        name: "Jasmine",
        image:
          "https://pbs.twimg.com/media/DfkhrO1XUAEYkdw?format=jpg&name=small",
      },
      {
        name: "Emilie",
        image:
          "https://pbs.twimg.com/media/DfkhrO1XUAEYkdw?format=jpg&name=small",
      },
    ];

    return (
      <div id="feed">
        {peopleFeedInfo.map((person) => (
          <FeedPersonElement key={person.name} personInfo={person} />
        ))}
      </div>
    );
  }
}

export default Feed;
