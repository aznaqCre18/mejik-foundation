import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div className="email-input">
        <div className="label">Email</div>
        <input
          placeholder="e.g. muhammadnajib@mail.com"
          className="input-email"
          onChange={this.props.change}
        />
      </div>
    );
  }
}
