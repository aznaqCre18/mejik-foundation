import React, { Component } from "react";

import Profile from "./../../../assets/icon/profile.png";

export default class index extends Component {
  render() {
    const data = this.props.data;

    return (
      <>
        <div className="container-history-list">
          <div className="profile-info">
            <div className="img-container">
              <img src={Profile} alt="Profile" />
            </div>
            <div className="name-container">
              <div className="name">
                {data.beneficiary.firstName + " " + data.beneficiary.lastName}
              </div>
              <div className="category">
                {data.beneficiary.categories.map((data) => data.name)}
              </div>
            </div>
          </div>
          <div style={{ margin: "auto" }}>
            <div style={{ margin: "auto" }}>{data.timeline}X</div>
          </div>
          <div className="amount">Rp.{data.amount}</div>
        </div>
      </>
    );
  }
}
