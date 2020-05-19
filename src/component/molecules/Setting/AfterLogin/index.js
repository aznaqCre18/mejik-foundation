import React, { Component } from "react";

import ProfileMain from "./../../ProfileMain";
import History from "./../../MenuSetting/History";
import ChangePassword from "./../../MenuSetting/ChangePassword";
import Logout from "./../../MenuSetting/Logout";

export default class index extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="main-container">
        <ProfileMain />
        <div className="detail-profile">
          {data ? (
            <div className="name">{data.firstName + " " + data.lastName}</div>
          ) : (
            <div className="name">...</div>
          )}
          {data ? (
            <div className="email">{data.email}</div>
          ) : (
            <div className="email">...</div>
          )}
          {data ? (
            <div className="phone">+6281286974581</div>
          ) : (
            <div className="phone">...</div>
          )}
        </div>
        <div className="separator"></div>
        <div className="section-menu">
          <History />
          <ChangePassword />
          <div className="separator"></div>
          <Logout />
        </div>
      </div>
    );
  }
}
