import { connect } from 'react-redux';
import { setConversion } from '../store/actions';
import CurrencyConverter from '../components/CurrencyConverter/CurrencyConverter';

const mapStateToProps = state => ({
   conversion: state.conversion,
});

const mapDispatchToProps = dispatch => ({
   onSetConversion: (value) => dispatch(setConversion(value))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(CurrencyConverter)
