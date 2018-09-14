import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from './assets/img/logo.svg';
import './styles.css';

export default class Layout extends Component {
  static PropTypes = {
    pageTitle: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    const { pageTitle, children } = this.props;

    return (
      <div className="welcome">
        <div className="welcome-header">
          <Link to="/">
            <img src={logo} className="welcome-logo" alt="logo" />
          </Link>
          <h2>{pageTitle}</h2>
        </div>
        <div className="content">{children}</div>
      </div>
    );
  }
}
