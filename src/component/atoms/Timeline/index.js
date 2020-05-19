import React, { Component } from "react";

export default class index extends Component {
  state = {
    timeline: null,
  };

  getValueTimeline = (event) => {
    this.setState({
      timeline: event.target.value,
    });
  };

  render() {
    return (
      <div className="target-category">
        <span className="inner-span">
          <input
            type="radio"
            className="check-box"
            value={1}
            name="selected-category"
            style={{ display: "none" }}
            id="1"
            onChange={this.getValueTimeline}
          />
          <label
            htmlFor="1"
            className="label"
            onClick={() => this.props.getTimeline(this.state.timeline)}
          >
            1x
          </label>
        </span>
        <span className="inner-span">
          <input
            type="radio"
            className="check-box"
            value={2}
            name="selected-category"
            style={{ display: "none" }}
            id="2"
            onChange={this.getValueTimeline}
          />
          <label
            htmlFor="2"
            className="label"
            onClick={() => this.props.getTimeline(this.state.timeline)}
          >
            2x
          </label>
        </span>
        <span className="inner-span">
          <input
            type="radio"
            className="check-box"
            value={3}
            name="selected-category"
            style={{ display: "none" }}
            id="3"
            onChange={this.getValueTimeline}
          />
          <label
            htmlFor="3"
            className="label"
            onClick={() => this.props.getTimeline(this.state.timeline)}
          >
            3x
          </label>
        </span>
        <span className="inner-span">
          <input
            type="radio"
            className="check-box"
            value={4}
            name="selected-category"
            style={{ display: "none" }}
            id="4"
            onChange={this.getValueTimeline}
          />
          <label
            htmlFor="4"
            className="label"
            onClick={() => this.props.getTimeline(this.state.timeline)}
          >
            4x
          </label>
        </span>
        <span className="inner-span">
          <input
            type="radio"
            className="check-box"
            value={5}
            name="selected-category"
            style={{ display: "none" }}
            id="5"
            onChange={this.getValueTimeline}
          />
          <label
            htmlFor="5"
            className="label"
            onClick={() => this.props.getTimeline(this.state.timeline)}
          >
            5x
          </label>
        </span>
      </div>
    );
  }
}
