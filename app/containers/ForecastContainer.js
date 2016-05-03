import React from 'react';
import Forecast from '../components/Forecast';
import { getForecast } from '../helpers/api';

class ForecastContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      forecastData: {}
    }
  }
  componentDidMount() {
    this.makeRequest(this.props.routeParams.city)
  }
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  }
  async makeRequest(city) {
    const forecastData = await getForecast(city);
    this.setState({
      isLoading: false,
      forecastData 
    });
  }
  handleClick(weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  }
  render() {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        handleClick={this.handleClick.bind(this)}
        forecastData={this.state.forecastData} />
    );
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ForecastContainer;
