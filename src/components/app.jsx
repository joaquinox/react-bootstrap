import React from 'react';
import Axios from 'axios';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';
import '../styles/app.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.handleSearchForm = this.handleSearchForm.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  handleSearchForm(city) {
    Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then(response => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
          selectedDate: response.data.forecasts[0].date,
        });
      });
  }

  componentDidMount() {
    Axios.get('https://mcr-codes-weather.herokuapp.com/forecast')
      .then(response => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
          selectedDate: response.data.forecasts[0].date,
        });
      });
  }

  render() {
    const selectedForecast = (
      this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate)
    );
    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm
          handleSearchForm={this.handleSearchForm}
        />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {
          selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

export default App;
