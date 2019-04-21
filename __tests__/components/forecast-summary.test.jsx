import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';

describe('Forecast Summary', () => {
  it('renders the date', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.date').text()).toEqual('mockDate');
  });

  it('renders the temperature', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.temperature').text()).toEqual('mockTemperature°C');
  });

  it('renders the description', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.description').text()).toEqual('mockDescription');
  });

  it('renders the icon', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.icon').text()).toEqual('<WeatherIcon />');
  });
});
