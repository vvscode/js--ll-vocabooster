import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import home from 'client/redux/home';

import Home from './Home.component';

const { init, getUserProfile } = home.actions;

const mapStateToProps = state => ({ text: state[home.name].text });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ init, getUserProfile }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
