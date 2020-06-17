import FilterCurrency from './FilterCurrency';

import { connect } from 'react-redux';

import { filterActions } from '../../../../redux/Filter'

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrency: value => {
      dispatch(filterActions.setFilterCurrency(value))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCurrency);
