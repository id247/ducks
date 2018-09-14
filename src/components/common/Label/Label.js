import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Label extends Component {
  static PropTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...props } = this.props;
    return <label {...props}>{children}</label>;
  }
}
