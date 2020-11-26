import react from "react";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = (props) => (
  <div className="forecast-summaries">
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
  </div>
);

export default ForecastSummaries;
