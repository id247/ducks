import React, { Component } from "react";

export default class Label extends Component {
  render() {
    const { children, ...props } = this.props;
    return <label {...props}>{children}</label>;
  }
}
