import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

const ForecastSummary = props => (
  <div>
    <div className="date">
      <span>
        {Moment(props.date).format('ddd Do MMM')}
      </span>
    </div>
    <div className="icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>
    <div className="temperature">
      <span>
        {props.temperature}&deg;C
      </span>
    </div>
    <div className="description">
      <span>
        {props.description}
      </span>
    </div>
    <button className="button" onClick={() => props.onSelect(props.date)}>More details...</button>
  </div>
);

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }),
  onForecastSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
