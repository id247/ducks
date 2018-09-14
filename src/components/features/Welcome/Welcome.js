import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Welcome extends Component {
  render() {
    const { counter } = this.props;

    return (
      <div>
        Wellcome! The counter is "{counter}
        ", you can update it <Link to="/counter">here</Link>
      </div>
    );
  }
}
