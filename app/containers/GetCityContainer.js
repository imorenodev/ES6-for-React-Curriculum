import React, { PropTypes } from 'react';
import GetCity from '../components/GetCity';

class GetCityContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }
  handleSubmitCity(e) {
    e.preventDefault()
    this.context.router.push('/forecast/' + this.state.city)
  }
  handleUpdateCity(e) {
    this.setState({
      city: e.target.value
    })
  }
  render() {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity.bind(this)}
        onUpdateCity={this.handleUpdateCity.bind(this)}
        city={this.state.city} />
    )
  }
}

GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

GetCityContainer.defaultProps = {
  direction: 'column'
};

GetCityContainer.propTypes = {
  direction: PropTypes.string
};

export default GetCityContainer;
