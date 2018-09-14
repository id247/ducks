import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MODES } from "../../../common/constants/mode";
import { Label, Radio } from "../../common";

export default class Welcome extends Component {
  static PropTypes = {
    mode: PropTypes.number.isRequired,
    updateMode: PropTypes.func.isRequired
  };

  render() {
    const { mode, updateMode } = this.props;

    return (
      <div>
        Wellcome! You can update counter <Link to="/counter">here</Link>
        <h3>Select mode</h3>
        {MODES.map(value => (
          <p key={value}>
            <Label htmlFor={`mode-${value}`}>
              <Radio
                id={`mode-${value}`}
                name="mode"
                value={value}
                checked={mode === value}
                onChange={() => updateMode(+value)}
              />
              Mode {value}
            </Label>
          </p>
        ))}
      </div>
    );
  }
}
