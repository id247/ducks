import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Radio extends Component {
  static PropTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, ...props } = this.props;
    return <input type="radio" {...props} />;
  }
}
