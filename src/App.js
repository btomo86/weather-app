import React, { useEffect } from "react";
import LocationDetails from "./components/location-details";
import ForecastSummaries from "./components/forecast-summaries";
import axios from "axios";

import ForecastDetails from "./components/ForecastDetails";
import "./styles/app.css";
import "./styles/forecast-summaries.css";
import { useState } from "react";
import SearchForm from "./components/SearchForm";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const info = axios
      .get("https://weather-app-alt.herokuapp.com/forecast")

      .then((response) => {
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
      });
  }, []);

  const locationSearch = (location) => {
    axios
      .get(`https://weather-app-alt.herokuapp.com/forecast?city=${location}`)
      .then((response) => {
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
      });
  };

  return (
    <div className="forecast">
      <LocationDetails location={location} />
      <SearchForm locationSearch={locationSearch} />
      <ForecastSummaries
        forecasts={forecasts}
        onSelect={handleForecastSelect}
      />

      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
