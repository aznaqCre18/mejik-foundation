import React, { Component } from "react";

import Lock from "./../../../../assets/icon/lock.png";
import In from "./../../../../assets/icon/in.png";

export default class index extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="title-menu">
          <img src={Lock} alt="history" className="lock" />
          <div className="title">Change Password</div>
        </div>
        <img src={In} alt="In" className="in" />
      </div>
    );
  }
}
