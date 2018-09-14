import { connect } from "react-redux";
import { counterValueSelector } from "../../../common/selectors/counter";
import Welcome from "./Welcome";

export default connect(
  state => ({
    counter: counterValueSelector(state)
  }),
  {}
)(Welcome);
