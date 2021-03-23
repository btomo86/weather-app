import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LocationDetails = (props) => {
  const { city, country } = props.location;
  return (
    <div>
      <LocationHeader>
        {city}, {country}
      </LocationHeader>
    </div>
  );
};

LocationDetails.defaultProps = { forecasts: undefined };

LocationDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  forecasts: PropTypes.array,
};

const LocationHeader = styled.h1`
  font-size: 40px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-family: "Noto Sans", sans-serif;
`;

export default LocationDetails;
