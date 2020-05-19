import React, { Component } from "react";

import Profile from "./../../../assets/icon/profile.png";

export default class index extends Component {
  render() {
    const data = this.props.data;
    let timeline = window.localStorage.getItem("timeline");
    let amount = window.localStorage.getItem("amount");
    return (
      <div className="container-bill-sumary">
        <div className="profile-info">
          <div className="img-container">
            <img src={Profile} alt="Profile" />
          </div>
          <div className="name-container">
            {data ? (
              <div className="name">{data.firstName + " " + data.lastName}</div>
            ) : null}
            <div className="category">
              {data ? data.categories.map((value) => value.name) : null}
            </div>
          </div>
        </div>
        <div className="timeline">{timeline}X</div>
        <div className="amount">Rp.{amount}</div>
      </div>
    );
  }
}
