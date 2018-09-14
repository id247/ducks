import { connect } from "react-redux";
import { increment, decrement } from "./ducks";
import { counterValueSelector } from "../../../common/selectors/counter";
import { counterDescriptionSelector } from "./selectors";
import Counters from "./Counters";

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(
  state => ({
    counter: counterValueSelector(state),
    description: counterDescriptionSelector(state)
  }),
  mapDispatchToProps
)(Counters);
