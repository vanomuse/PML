import FilterCity from './FilterCity';

import { connect } from 'react-redux';

import { filterActions } from '../../../../redux/Filter'

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilterCities: value => {
      dispatch(filterActions.setFilterCity(value))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCity);
