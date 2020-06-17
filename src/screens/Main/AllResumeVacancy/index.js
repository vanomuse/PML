import AllResumeVacancy from './AllResumeVacancy';

import { connect } from 'react-redux';

import { cvCreateActions } from '../../../redux/CvCreate';

const mapDispatchToProps = dispatch => {
  return {
    getAllCategories: () => {
      dispatch(cvCreateActions.getCategories());
    },
    getAllProfessions: () => {
        dispatch(cvCreateActions.getProfessions());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(AllResumeVacancy);