import React from "react";
import PropTypes from "prop-types";

const LocationDetails = (props) => {
  const { city, country } = props.location;
  return (
    <div>
      <h1 className="location-details">
        {city}, {country}
      </h1>
    </div>
  );
};

LocationDetails.defaultProps = { forecasts: undefined };

LocationDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  forecasts: PropTypes.array,
};

export default LocationDetails;
