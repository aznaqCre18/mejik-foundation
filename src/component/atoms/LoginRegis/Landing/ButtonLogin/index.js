import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <Link to="/login-email">
        <div className="login-button">Login</div>
      </Link>
    );
  }
}
