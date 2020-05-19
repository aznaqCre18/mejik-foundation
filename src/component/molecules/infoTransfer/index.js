import React, { Component } from "react";

import BCA from "./../../../assets/image/bca.png";

export default class index extends Component {
  render() {
    return (
      <div className="info-transfer">
        <img src={BCA} alt="bca" className="bca" />
        <div className="container-info">
          <div className="title-rek">Virtual Account</div>
          <div className="rek-number">0001-2846-1819-2910</div>
          <div className="title-name-holder">Name Holder</div>
          <div className="name-holder">Mejik Foundation</div>
        </div>
      </div>
    );
  }
}
