import React, { Component } from "react";
import { Link } from "react-router-dom";

import Back from "./../../../assets/icon/back.png";

export default class index extends Component {
  handleClickBack = () => {
    window.localStorage.removeItem("benefId");
    window.localStorage.removeItem("amount");
    window.localStorage.removeItem("total");
    window.localStorage.removeItem("timeline");
  };

  render() {
    return (
      <>
        <div className="header-payment">
          <Link to="/donate">
            <img
              src={Back}
              alt="Back"
              className="back-btn"
              onClick={() => this.handleClickBack()}
            />
          </Link>
          <div className="proof-title">Proof Of Transfer</div>
        </div>
      </>
    );
  }
}
