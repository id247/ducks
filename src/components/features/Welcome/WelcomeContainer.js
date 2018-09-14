import { connect } from "react-redux";
import { modeValueSelector } from "../../../common/selectors/mode";
import { updateMode } from "../../../common/ducks/mode";
import Welcome from "./Welcome";

export default connect(
  state => ({
    mode: modeValueSelector(state)
  }),
  { updateMode }
)(Welcome);
