import { connect } from 'react-redux';
import Maximum from '../components/Maximum/Maximum';

const mapStateToProps = state => ({
   transactions: state.transactions,
   conversion: state.conversion
});

export default connect(
   mapStateToProps,
   null
)(Maximum)
