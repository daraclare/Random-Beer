import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const BeerInfo = props => {
  const { data } = props;

  return (
    <main className="card">
      <h2>{data.name}</h2>
      <section>
        <article>
          <p>
            {data.description ? data.description : "No description available"}
          </p>
          <p>
            Brewed by{" "}
            <Link to={`${data.id}/brewery`}>{data.breweries[0].name}</Link>
          </p>
        </article>
        <figure>
          <img src={`${data.labels.medium}`} alt={`${data.name} label}`} />
          <figcaption>{data.name} Label</figcaption>
        </figure>
      </section>
    </main>
  );
};

BeerInfo.propTypes = {
  data: PropTypes.object.isRequired
};
