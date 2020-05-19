import React, { Component } from "react";

import Cover from "../../../assets/icon/cover.png";
import RighArrow from "../../../assets/icon/right-arrow.png";

export default class index extends Component {
  render() {
    return (
      <div className="article-container">
        <img src={Cover} alt="Cover" className="cover" />
        <div className="title-container">
          <div className="title">{this.props.title}</div>
          <div className="read-more">
            <div className="title-read">Read more</div>
            <img src={RighArrow} alt="Right" className="right-arrow" />
          </div>
        </div>
      </div>
    );
  }
}
