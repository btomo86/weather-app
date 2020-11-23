import React from "react";
import LocationDetails from "./components/location-details";
import ForecastSummaries from "./components/forecast-summaries";
import { location, forecasts } from "./data/forecast.json";
import ForecastDetails from "./components/ForecastDetails";
import "./styles/app.css";
import "./styles/forecast-summaries.css";
import { useState } from "react";

const App = (props) => {
  const [selectedDate, setSelectedDate] = useState(props.forecasts[0].date);

  const selectedForecast = props.forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  return (
    <div className="forecast">
      <LocationDetails location={props.location} />
      <ForecastSummaries forecasts={props.forecasts} />
      <ForecastDetails forecast={props.forecasts[0]} />
    </div>
  );
};

export default App;
