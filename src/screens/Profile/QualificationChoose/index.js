import QualificationChoose from './QualificationChoose';

import { employeeActions } from '../../../redux/Employee';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    setQualification: qualif => {
      dispatch(employeeActions.updateQualification(qualif));
    }
  };
};

export default connect(null, mapDispatchToProps)(QualificationChoose);
