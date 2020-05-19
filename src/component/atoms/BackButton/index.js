import React, { Component } from "react";
import { Link } from "react-router-dom";
import Back from "./../../../assets/icon/back.png";

export default class index extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <div className="back-button">
          <img src={Back} alt="back" />
        </div>
      </Link>
    );
  }
}
