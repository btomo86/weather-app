import React, { useEffect } from "react";
import LocationDetails from "./components/location-details";
import ForecastSummaries from "./components/forecast-summaries";
import axios from "axios";
import ForecastDetails from "./components/ForecastDetails";

import { useState } from "react";
import SearchForm from "./components/SearchForm";
import GlobalStyle from "./components/GlobalStyles";

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
    async function fetchData() {
      await axios
        .get("https://mcr-codes-weather.herokuapp.com/forecast")
        .then((response) => {
          setForecasts(response.data.forecasts);
          setLocation(response.data.location);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            throw new Error("Page not found.");
          } else if (error.response.status === 500) {
            throw new Error("Server error. Please try again later.");
          } else {
            console.log(error.message);
            throw new Error(
              "Whoops, something has gone wrong...Please try again!"
            );
          }
        });
    }

    fetchData();
  }, []);

  const locationSearch = (location) => {
    async function fetchData() {
      await axios
        .get(
          `https://mcr-codes-weather.herokuapp.com/forecast?city=${location}`
        )
        .then((response) => {
          setForecasts(response.data.forecasts);
          setLocation(response.data.location);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            alert("This city cannot be found. Please try a different city.");
          } else if (error.response.status === 500) {
            throw new Error("Server error. Please try again later.");
          } else {
            console.log(error.message);
            throw new Error(
              "Whoops, something has gone wrong... Please try again"
            );
          }
        });
    }
    fetchData();
  };

  return (
    <div className="forecast">
      <GlobalStyle />
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
