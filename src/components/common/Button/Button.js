import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  static PropTypes = {
    children: PropTypes.node
  };

  render() {
    const { children, ...props } = this.props;
    return <button {...props}>{children}</button>;
  }
}
