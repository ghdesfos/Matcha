import React, { Component } from "react";
import { PersonInfo } from "../types";

interface IProps {
  personInfo: PersonInfo;
  key?: string;
}

interface IState {}

class FeedPersonElement extends Component<IProps, IState> {
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
