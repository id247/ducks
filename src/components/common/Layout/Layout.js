import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "./assets/img/logo.svg";
import "./styles.css";

export default class Layout extends Component {
  render() {
    const { pageTitle } = this.props;

    return (
      <div className="welcome">
        <div className="welcome-header">
          <Link to="/">
            <img src={logo} className="welcome-logo" alt="logo" />
          </Link>
          <h2>{pageTitle}</h2>
        </div>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}
