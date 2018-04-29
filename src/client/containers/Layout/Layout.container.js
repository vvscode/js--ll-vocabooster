import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import layout from 'client/redux/layout';
import LayoutComponent from './Layout.component';

const { removeErrorFromQueue } = layout.actions;

function mapStateToProps(state) {
  return state[layout.name];
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ removeErrorFromQueue }, dispatch),
  };
}

const connectedLayout = connect(mapStateToProps, mapDispatchToProps)(
  LayoutComponent,
);

export default withRouter(connectedLayout);
