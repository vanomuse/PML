import FilterHeading from './FilterHeading';

import { connect } from 'react-redux';

import { filterActions } from '../../../../redux/Filter'

const mapStateToProps = state => {
  return {
    categories: state.cvCreate.categories,
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilterCategories: value => {
      dispatch(filterActions.setFilterCategory(value))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterHeading);
