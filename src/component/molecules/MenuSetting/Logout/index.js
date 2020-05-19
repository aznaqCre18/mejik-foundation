import React, { Component } from "react";

import Logout from "./../../../../assets/icon/logout.png";
import Out from "./../../../../assets/icon/out.png";

export default class index extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="title-menu">
          <img src={Logout} alt="history" />
          <div className="title-logout">Logout</div>
        </div>
        <img src={Out} alt="Out" className="out" />
      </div>
    );
  }
}
