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

LocationDetails.propTypes = {
  location: PropTypes.objectOf({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default LocationDetails;
