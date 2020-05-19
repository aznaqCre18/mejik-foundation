import React, { Component } from "react";

export default class index extends Component {
  state = {
    amount: null,
  };

  getValueAmount = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  render() {
    return (
      <div className="target-category">
        <span className="inner-span">
          <input
            type="radio"
            className="check-box"
            value={100000}
            name="selected-category"
            style={{ display: "none" }}
            id="100k"
            onChange={this.getValueAmount}
          />
          <label
            htmlFor="100k"
            className="label"
            onClick={() => this.props.getAmount(this.state.amount)}
          >
            Rp.100.000
          </label>
        </span>

        <span className="inner-span">
          <input
            type="radio"
            className="check-box"
            value={300000}
            name="selected-category"
            style={{ display: "none" }}
            id="300k"
            onChange={this.getValueAmount}
          />
          <label
            htmlFor="300k"
            className="label"
            onClick={() => this.props.getAmount(this.state.amount)}
          >
            Rp.300.000
          </label>
        </span>

        <span className="inner-span">
          <input
            type="radio"
            className="check-box"
            value={500000}
            name="selected-category"
            style={{ display: "none" }}
            id="500k"
            onChange={this.getValueAmount}
          />
          <label
            htmlFor="500k"
            className="label"
            onClick={() => this.props.getAmount(this.state.amount)}
          >
            Rp.500.000
          </label>
        </span>

        <span className="inner-span">
          <input
            type="radio"
            className="check-box"
            value={800000}
            name="selected-category"
            style={{ display: "none" }}
            id="800k"
            onChange={this.getValueAmount}
          />
          <label
            htmlFor="800k"
            className="label"
            onClick={() => this.props.getAmount(this.state.amount)}
          >
            Rp.800.000
          </label>
        </span>

        <span className="inner-span">
          <input
            type="radio"
            className="check-box"
            value={1000000}
            name="selected-category"
            style={{ display: "none" }}
            id="1000k"
            onChange={this.getValueAmount}
          />
          <label
            htmlFor="1000k"
            className="label"
            onClick={() => this.props.getAmount(this.state.amount)}
          >
            Rp.1000.000
          </label>
        </span>

        <span className="inner-span">
          <input
            type="radio"
            className="check-box"
            value={1500000}
            name="selected-category"
            style={{ display: "none" }}
            id="1500k"
            onChange={this.getValueAmount}
          />
          <label
            htmlFor="1500k"
            className="label"
            onClick={() => this.props.getAmount(this.state.amount)}
          >
            Rp.1500.000
          </label>
        </span>
      </div>
    );
  }
}
