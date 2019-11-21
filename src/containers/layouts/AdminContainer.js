import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import * as azureActions from 'actions/azure';
import Admin from 'layouts/Admin';

const mapDispatchToProps = dispatch => {
  return {
    azureActions: bindActionCreators(azureActions, dispatch)
  };
};

const mapStateToProps = state => {
  const { azure } = state;
  return {
    azure
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);