import FilterQualification from './FilterQualification';

import { connect } from 'react-redux';

import { filterActions } from '../../../../redux/Filter'

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilterQualifications: value => {
      dispatch(filterActions.setFilterQualification(value))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterQualification);
