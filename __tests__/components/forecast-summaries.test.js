import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';
import ForecastSummaries from '../../src/components/forecast-summaries';

describe('Forecast Summaries', () => {
  const forecasts = [
    {
      date: 123,
      description: 'date1',
      icon: 'icon1',
      temperature: {
        max: 999,
      },
    },

    {
      date: 456,
      description: 'date2',
      icon: 'icon2',
      temperature: {
        max: 777,
      },
    },
  ];

  it('renders the correct number of ForecastSummary components', () => {
    const wrapper = Enzyme.shallow((
      <ForecastSummaries forecasts={forecasts} />
    ));
    expect(wrapper.find(ForecastSummary).length).toEqual(2);
  });

  it('passes the correct values to each ForecastSummary component', () => {
    const wrapper = Enzyme.shallow((
      <ForecastSummaries forecasts={forecasts} />
    ));
    wrapper.find(ForecastSummary).forEach((node, index) => {
      expect(node.prop('date')).toEqual(forecasts[index].date);
      expect(node.prop('description')).toEqual(forecasts[index].description);
      expect(node.prop('icon')).toEqual(forecasts[index].icon);
      expect(node.prop('temperature')).toEqual(forecasts[index].temperature.max);
    });
  });
});
