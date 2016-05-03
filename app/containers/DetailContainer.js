import React from 'react';
import Detail from '../components/Detail';

class DetailContainer extends React.Component {
  render() {
    const { location, routeParams } = this.props;
    return (
      <Detail
        weather={location.state.weather}
        city={routeParams.city} />
    );
  }
}

export default DetailContainer;
