import React, { Component } from "react";
import { PersonInfo } from "../types/types";
import store from "../store";
import { likedPhoto, unlikedPhoto } from "../actions";

interface FeedPersonElementProps {
  personInfo: PersonInfo;
}

interface FeedPersonElementState {}

class FeedPersonElement extends Component<
  FeedPersonElementProps,
  FeedPersonElementState
> {
  // not sure if it is an antipattern to put the store.dispatch here
  toggleStar(event: any, name: string, imageUrl: string) {
    var targetElement = event.target || event.srcElement;
    if (targetElement.classList.contains("clickedStar")) {
      targetElement.classList.remove("clickedStar");
      store.dispatch(unlikedPhoto(name, imageUrl));
    } else {
      targetElement.classList.add("clickedStar");
      store.dispatch(likedPhoto(name, imageUrl));
    }
  }

  checkIfLiked() {
    const globalState = store.getState();
    return globalState.some((elem) => {
      return elem.imageUrl === this.props.personInfo.image;
    });
  }

  render() {
    const { name, image } = this.props.personInfo;
    const classes = "stars " + this.checkIfLiked() ? "clickedStar" : "";

    return (
      <div className="block-image">
        <p>{name}</p>
        <img src={image} />
        <span
          className={classes}
          onClick={(event) => this.toggleStar(event, name, image)}
        >
          *
        </span>
      </div>
    );
  }
}

export default FeedPersonElement;
