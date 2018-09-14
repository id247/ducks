import { connect } from 'react-redux';
import { increment, decrement } from './ducks';
import {
  counterValueSelector,
  counterDescriptionSelector,
  counterMultiplyedByModeSelector,
} from './selectors';
import Counters from './Counters';

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(
  state => ({
    counter: counterValueSelector(state),
    description: counterDescriptionSelector(state),
    counterMultiplyedByMode: counterMultiplyedByModeSelector(state),
  }),
  mapDispatchToProps,
)(Counters);
