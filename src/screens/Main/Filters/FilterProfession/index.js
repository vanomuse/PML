import FilterProfession from './FilterProfession';

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
    setFilterProfessions: value => {
      dispatch(filterActions.setFilterProfession(value))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterProfession);
