import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <Link to="/login-password">
        <div className="next-button" onClick={this.props.onclick}>
          Next
        </div>
      </Link>
    );
  }
}
