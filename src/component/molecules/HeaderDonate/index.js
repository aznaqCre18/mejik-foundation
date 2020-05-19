import React, { Component } from "react";
import { Link } from "react-router-dom";

import HistoryIcon from "./../../../assets/icon/history.png";
import CrossIcon from "./../../../assets/icon/cross.png";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="header-donate">
          <Link to="/">
            <img src={CrossIcon} alt="Close" className="close" />
          </Link>
          <div className="donate-title">Donation</div>
          <Link to="/history">
            <img src={HistoryIcon} alt="History" className="history" />
          </Link>
        </div>
      </>
    );
  }
}
