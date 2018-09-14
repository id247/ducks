import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common";

export default class Counters extends Component {
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
