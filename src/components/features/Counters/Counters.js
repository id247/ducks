import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "../../common";

export default class Counters extends Component {
  static PropTypes = {
    counter: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    counterMultiplyedByMode: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {
    const {
      counter,
      description,
      counterMultiplyedByMode,
      increment,
      decrement
    } = this.props;
    return (
      <div>
        <p>Counter: {counter} </p>
        <p>Description: {description}</p>
        <p>counter * mode = {counterMultiplyedByMode}</p>
        <p>
          <Button type="button" onClick={() => increment()}>
            Up
          </Button>{" "}
          <Button type="button" onClick={() => decrement()}>
            Down
          </Button>
        </p>
      </div>
    );
  }
}
