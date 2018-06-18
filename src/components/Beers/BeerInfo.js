import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const BeerInfo = props => {
  const { data } = props;

  return (
    <Fragment>
      <h1>{data.name}</h1>
      <p>{data.description ? data.description : "No description available"}</p>
      <p>
        Brewed by{" "}
        <Link to={`${data.id}/brewery`}>{data.breweries[0].name}</Link>
      </p>

      <img src={`${data.labels.large}`} alt={`${data.name} label}`} />
    </Fragment>
  );
};

BeerInfo.propTypes = {
  data: PropTypes.object.isRequired
};
