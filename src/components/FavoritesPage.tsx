import React, { Component } from "react";
import { PersonInfo } from "../types/types";
import FeedPersonElement from "./FeedPersonElement";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

interface FavoritesPageProps {
  personInfoList: PersonInfo[];
}

interface FavoritesPageState {
  loading: boolean;
}

class FavoritesPage extends Component<FavoritesPageProps, FavoritesPageState> {
  constructor(props: FavoritesPageProps) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    if (loading)
      return (
        <div className="spinner">
          <Loader type="Oval" color="#585858" height={50} width={50} />
        </div>
      );
    else if (this.props.personInfoList.length === 0) {
      console.log("loading spinner - state loading - else if:", loading);
      return (
        <p>
          You've starred no one so far. go back to <Link to="/">Feed</Link> to
          meet people!
        </p>
      );
    } else {
      return (
        <div id="favorites">
          <p>This is the favorites page</p>
          {this.props.personInfoList.map((person) => (
            <FeedPersonElement key={person.image} personInfo={person} />
          ))}
        </div>
      );
    }
  }
}

function mapStateToProps(state: any) {
  const personInfoList: PersonInfo[] = [];
  state.forEach((elem: any) => {
    const personInfoElem = {
      name: elem.name,
      image: elem.imageUrl,
    };
    personInfoList.push(personInfoElem);
  });
  return { personInfoList };
}

export default connect(mapStateToProps)(FavoritesPage);
