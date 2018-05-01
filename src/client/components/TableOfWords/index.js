import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TableOfWords from './TableOfWords';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableOfWords);
