import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import "./beers.css";

import { api, URL } from "../Api/Api";
import { BeerInfo } from "./BeerInfo";
import Brewery from "./Brewery";

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };

    this.loadRandomBeer = this.loadRandomBeer.bind(this);
  }

  componentDidMount() {
    this.loadRandomBeer();
  }

  loadRandomBeer() {
    api.getData(URL).then(response => {
      if (this.props.history.location.pathname !== "/") {
        this.props.history.push("/");
      }
      this.props.history.push(`/${response.data.id}`);
      this.setState({
        data: response.data,
        loading: false
      });
    });
  }

  render() {
    const data = this.state.data;
    const loading = this.state.loading;
    return (
      <div id="container">
        {loading ? (
          <h1>Loading a random beer …</h1>
        ) : (
          <div>
            <button onClick={this.loadRandomBeer}>
              {" "}
              Find Another Random Beer
            </button>
            <Route
              exact
              path="/:id"
              //eslint-disable-next-line
              render={props => <BeerInfo data={data} {...props} />}
            />
            <Route
              path="/:id/brewery"
              //eslint-disable-next-line
              render={props => <Brewery data={data} {...props} />}
            />
          </div>
        )}
      </div>
    );
  }
}

Beers.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Beers);
