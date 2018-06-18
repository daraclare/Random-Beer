import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { api, URL } from "../Api/Api";
import { BeerInfo } from "../BeerInfo/BeerInfo";
import { Brewery } from "../Brewery/Brewery";

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      disabled: false
    };

    this.loadRandomBeer = this.loadRandomBeer.bind(this);
  }

  componentDidMount() {
    this.loadRandomBeer();
  }

  loadRandomBeer() {
    this.setState({
      disabled: true
    });
    api.getData(URL).then(response => {
      if (this.props.history.location.pathname !== "/") {
        this.props.history.push("/");
      }
      this.props.history.push(`/${response.data.id}`);
      this.setState({
        data: response.data,
        loading: false,
        disabled: false
      });
    });
  }

  render() {
    const data = this.state.data;
    const loading = this.state.loading;
    const disabled = this.state.disabled
      ? "Searching …"
      : "Find Another Random Beer";
    return (
      <div id="container">
        {loading ? (
          <h1>Please wait while we find a random beer …</h1>
        ) : (
          <div>
            <button onClick={this.loadRandomBeer}>{disabled}</button>
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
