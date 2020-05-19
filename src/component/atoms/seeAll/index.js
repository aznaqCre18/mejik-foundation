import React, { Component } from "react";

import Arrow from "./../../../assets/icon/arrow-right.png";

export default class index extends Component {
  render() {
    return (
      <div className="target-container">
        <img src={Arrow} alt="Arrow" className="arrow-pict" />
        <div className="see-title">See All</div>
      </div>
    );
  }
}
