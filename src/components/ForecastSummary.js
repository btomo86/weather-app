import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import Moment from "moment";
import styled from "styled-components";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon } = props;

  return (
    <>
      <ForecastContainer>
        <ForeCastInfo>
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
              <WeatherIcon name="owm" iconId={icon} />
            </span>
          </div>
          <DetailButton onClick={() => props.onSelect(props.date)}>
            More Details
          </DetailButton>
        </ForeCastInfo>
      </ForecastContainer>
    </>
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

const ForecastContainer = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  background-color: #163d57;
  box-shadow: 0 10px 50px #77d0d8;
`;

const ForeCastInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
  margin: auto;
`;

const DetailButton = styled.button`
  width: 150px;
  height: 35px;
  border-radius: 5px;
  font-size: 15px;
  background-color: #f4a15d;
  margin-right: 5px;
`;
export default ForecastSummary;
