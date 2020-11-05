import React, { Component } from "react";

class FeedPersonElement extends Component<any, any> {
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
