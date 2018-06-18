import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default class Brewery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const brewery = data.breweries[0];
    return (
      <div>
        <h1>Brewery: {brewery.name}</h1>
        <h4>Established: {brewery.established}</h4>
        <p>
          {brewery.description
            ? brewery.description
            : "no description available"}
        </p>
        <p>
          <Link to={`/${data.id}`}>{`Back to ${data.name} details`}</Link>
        </p>
        {brewery.images ? (
          <img src={brewery.images.large} alt="Brewery logo" />
        ) : (
          <img
            src="http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg"
            alt="No logo available"
          />
        )}
      </div>
    );
  }
}

Brewery.propTypes = {
  data: PropTypes.object.isRequired
};
