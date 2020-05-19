import React, { Component } from "react";

import Profile from "./../../../assets/icon/profile-main.png";

export default class index extends Component {
  render() {
    return (
      <>
        <div className="profile-pict-container">
          <div className="edit">Edit</div>
        </div>
        <div className="profile-pict">
          <img src={Profile} className="profile" alt="Profile" />
        </div>
      </>
    );
  }
}
