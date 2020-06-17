import CityChoose from './CityChoose';

import { employeeActions } from '../../../redux/Employee';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    setCity: city => {
      dispatch(employeeActions.updateCity(city));
    }
  };
};

export default connect(null, mapDispatchToProps)(CityChoose);
