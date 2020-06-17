import FilterSalary from './FilterSalary';

import { connect } from 'react-redux';

import { filterActions } from '../../../../redux/Filter'

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSalaryFrom: value => {
      dispatch(filterActions.setFilterSalaryFrom(value))
    },
    setSalaryTo: value => {
        dispatch(filterActions.setFilterSalaryTo(value))
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSalary);
