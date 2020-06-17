import Heading from './Heading';

import { connect } from 'react-redux';

import { cvCreateActions } from '../../../redux/CvCreate';

const mapStateToProps = state => {
  return {
    categories: state.cvCreate.categories,
    cv: state.cvCreate.cv
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCategory: value => {
      dispatch(cvCreateActions.setReducerValue('category', value));
    },
    setName: name => {
      dispatch(cvCreateActions.setCategoryName(name));
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Heading);
