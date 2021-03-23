import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import styled from "styled-components";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, wind, humidity } = forecast;
  return (
    <ForecastDetailsContainer>
      <InnerDetails>{Moment(date).format("ddd Do MMM")}</InnerDetails>
      <InnerDetails>Max Temp:{temperature.max}&deg;c</InnerDetails>
      <InnerDetails>Min Temp:{temperature.min}&deg;c</InnerDetails>
      <InnerDetails>Wind Speed:{wind.speed}mph</InnerDetails>
      <InnerDetails>Humidity:{humidity}%</InnerDetails>
    </ForecastDetailsContainer>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.object.isRequired,
};

const ForecastDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 200px;

  font-weight: bolder;
  font-size: 30px;

  margin: auto;
`;

const InnerDetails = styled.div``;

export default ForecastDetails;
