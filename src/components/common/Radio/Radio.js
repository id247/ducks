import React, { Component } from "react";

export default class Radio extends Component {
  render() {
    const { children, ...props } = this.props;
    return <input type="radio" {...props} />;
  }
}
