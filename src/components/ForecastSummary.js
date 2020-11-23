import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import Moment from "moment";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon, handleForecastSelect } = props;
  console.log(icon);
  return (
    <h2>
      <div className="date" data-testid="date-id">
        <span> {Moment(date).format("ddd Do MMM")}</span>
      </div>
      <div className="temperature" data-testid="temperature-id">
        <span> {temperature}&deg;c </span>
      </div>
      <div className="description" data-testid="description-id">
        <span> {description} </span>
      </div>
      <div className="icon" data-testid="icon-id">
        <span>
          {" "}
          <WeatherIcon name="owm" iconId={props.icon} />{" "}
        </span>
      </div>
      <button onClick={() => handleForecastSelect(date)}>More Details</button>
    </h2>
  );
};

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    handleForecastSelect: PropTypes.func.isRequired,
  }),
};
export default ForecastSummary;
