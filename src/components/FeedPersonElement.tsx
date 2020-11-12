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
  render() {
    const { name, image } = this.props.personInfo;

    return (
      <div className="block-image">
        <p>{name}</p>
        <img src={image} />
      </div>
    );
  }
}

export default FeedPersonElement;
