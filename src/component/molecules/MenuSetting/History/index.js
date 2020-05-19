import React, { Component } from "react";
import { Link } from "react-router-dom";

import History from "./../../../../assets/icon/history.png";
import In from "./../../../../assets/icon/in.png";

export default class index extends Component {
  render() {
    return (
      <Link to="/history">
        <div className="menu-container">
          <div className="title-menu">
            <img src={History} alt="history" />
            <div className="title">History</div>
          </div>
          <img src={In} alt="In" className="in" />
        </div>
      </Link>
    );
  }
}
