import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div className="password-input">
        <div className="label">Password</div>
        <input
          placeholder="Enter your password..."
          className="input-password"
          type="password"
          onChange={this.props.change}
        />
      </div>
    );
  }
}
