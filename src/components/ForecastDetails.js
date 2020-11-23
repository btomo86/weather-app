import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import WeatherIcon from "react-icons-weather";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, wind, humidity } = forecast;
  return (
    <>
      <div className="detail-date">{Moment(date).format("ddd Do MMM")}</div>
      <div className="max-temp">Max Temp:{temperature.max}&deg;c</div>
      <div className="min-temp">Min Temp:{temperature.min}&deg;c</div>
      <div className="wind-speed">Wind Speed:{wind.speed}mph</div>
      <div className="humidity">Humidity:{humidity}%</div>
    </>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastDetails;
