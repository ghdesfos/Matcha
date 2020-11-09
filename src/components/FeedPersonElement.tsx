import React, { Component } from "react";
import { PersonInfo } from "../types";

interface FeedPersonElementProps {
  personInfo: PersonInfo;
}

interface FeedPersonElementState {}

class FeedPersonElement extends Component<
  FeedPersonElementProps,
  FeedPersonElementState
> {
  toggleStar(event: any) {
    //
    console.log("click");
    var targetElement = event.target || event.srcElement;
    if (targetElement.classList.contains("clickedStar")) {
      targetElement.classList.remove("clickedStar");
    } else {
      targetElement.classList.add("clickedStar");
    }
  }

  render() {
    const { name, image } = this.props.personInfo;

    return (
      <div className="block-image">
        <p>{name}</p>
        <img src={image} />
        <span className="stars" onClick={this.toggleStar}>
          *
        </span>
      </div>
    );
  }
}

export default FeedPersonElement;
