import React, { Component } from "react";
import { Link } from "react-router-dom";

import Back from "./../../../assets/icon/back.png";
import SearchIcon from "./../../../assets/icon/search.png";

export default class index extends Component {
  render() {
    return (
      <div className="header-history">
        <Link to="/setting">
          <img src={Back} alt="Back" className="back" />
        </Link>
        <div className="history-title">History</div>
        <img src={SearchIcon} alt="Search" className="search" />
      </div>
    );
  }
}
