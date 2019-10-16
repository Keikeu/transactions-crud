import { connect } from 'react-redux';
import { addTransaction } from '../store/actions';
import Form from '../components/Form/Form';

const mapDispatchToProps = dispatch => ({
   onAddTransaction: (name, amount) => dispatch(addTransaction(name, amount))
});

export default connect(
   null,
   mapDispatchToProps
)(Form)
