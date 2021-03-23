import React from "react";
import ForecastSummary from "./ForecastSummary";
import styled from "styled-components";

const ForecastSummaries = (props) => (
  <ForecastContainer>
    {props.forecasts.map((forecast) => (
      <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature.max}
        onSelect={props.onSelect}
      />
    ))}
  </ForecastContainer>
);

const ForecastContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  margin-bottom: 100px;
  width: 100%;
  height: 350px;
  margin-top: 100px;
`;
export default ForecastSummaries;
