import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common";

export default class Counters extends Component {
  render() {
    const { counter, description, increment, decrement } = this.props;
    return (
      <div>
        <p>
          {counter} ({description})
        </p>
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
