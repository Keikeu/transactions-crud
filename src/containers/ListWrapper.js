import { connect } from 'react-redux';
import { deleteTransaction } from '../store/actions';
import List from '../components/List/List';

const mapStateToProps = state => ({
   transactions: state.transactions,
   conversion: state.conversion
});

const mapDispatchToProps = dispatch => ({
   onDeleteTransaction: (id) => dispatch(deleteTransaction(id))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(List)
