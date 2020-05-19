import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <Link to="/login-regis">
        <div className="main-container-before">
          <button className="to-login-btn">
            Login atau Daftar Dulu yuk...
          </button>
        </div>
      </Link>
    );
  }
}
