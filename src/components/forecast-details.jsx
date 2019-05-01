import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import '../styles/forecast-details.scss';

const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="detailed-date">
      <span>
        {Moment(props.forecast.date).format('ddd Do MMM')}
      </span>
    </div>
    <div className="max-temperature">
      <span>
        Max. Temperature: {props.forecast.temperature.max}&deg;C
      </span>
    </div>
    <div className="min-temperature">
      <span>
        Min. Temperature: {props.forecast.temperature.min}&deg;C
      </span>
    </div>
    <div className="humidity">
      <span>
        Humidity: {props.forecast.humidity}%
      </span>
    </div>
    <div className="wind">
      <span>
        Wind Speed: {props.forecast.wind.speed}mph
        <br />
        Wind Direction: {props.forecast.wind.direction}
      </span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.shape().isRequired,
};

export default ForecastDetails;
