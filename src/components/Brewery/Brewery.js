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
      <div className="card">
        <h1>About the Brewery </h1>
        <h3>Brewery: {brewery.name}</h3>
        <h4>
          Established: {brewery.established ? brewery.established : "Unknown"}
        </h4>
        <p>
          {brewery.description
            ? brewery.description
            : "No description available"}
        </p>

        <figure className="brewery">
          {brewery.images && brewery.images.medium ? (
            <img src={brewery.images.medium} alt="Brewery logo" />
          ) : (
            <img
              src="http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg"
              alt="No logo available"
            />
          )}
          <figcaption>{brewery.name} Label</figcaption>
        </figure>

        <Link className="back-button" to={`/${data.id}`}>
          <button>
            <small>&lt; BACK</small>
          </button>
        </Link>
      </div>
    );
  }
}

Brewery.propTypes = {
  data: PropTypes.object.isRequired
};
