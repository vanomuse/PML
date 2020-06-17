import FilterAge from './FilterAge';

import { connect } from 'react-redux';

import { filterActions } from '../../../../redux/Filter'

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAgeFrom: value => {
      dispatch(filterActions.setFilterAgeFrom(value))
    },
    setAgeTo: value => {
        dispatch(filterActions.setFilterAgeTo(value))
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterAge);
