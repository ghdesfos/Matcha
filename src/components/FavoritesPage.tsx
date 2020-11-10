import React, { Component } from "react";
import store from "../store";
import { PersonInfo } from "../types/types";
import FeedPersonElement from "./FeedPersonElement";

interface FavoritesPageProps {}

interface FavoritesPageState {
  unsubscribe: any;
  personInfoList: PersonInfo[];
}

class FavoritesPage extends Component<FavoritesPageProps, FavoritesPageState> {
  constructor(props: FavoritesPageProps) {
    super(props);

    const unsubscribe = store.subscribe(() => {
      const newState: PersonInfo[] = this.defineNewState();
      this.setState({ personInfoList: newState });
    });

    this.state = {
      unsubscribe,
      personInfoList: [],
    };
  }

  defineNewState() {
    const newState: PersonInfo[] = [];
    const globalState = store.getState();

    globalState.forEach((elem: any) => {
      const newStateElem = {
        name: elem.name,
        image: elem.imageUrl,
      };
      newState.push(newStateElem);
    });
    return newState;
  }

  componentDidMount() {
    const newState: PersonInfo[] = this.defineNewState();
    this.setState({ personInfoList: newState });
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  render() {
    return (
      <div id="favorites">
        <p>This is the favorites page</p>
        {this.state.personInfoList.map((person) => (
          <FeedPersonElement key={person.image} personInfo={person} />
        ))}
      </div>
    );
  }
}

export default FavoritesPage;
