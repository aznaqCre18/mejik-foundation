import React, { Component } from "react";

import SearchIcon from "./../../../assets/icon/search.png";
export default class index extends Component {
  render() {
    return (
      <>
        <div className="header-container">
          <div className="article-title">Article</div>
          <img src={SearchIcon} alt="Search" />
        </div>
      </>
    );
  }
}
