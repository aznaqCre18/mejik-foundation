import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./../../../style/Footer/style.scss";
import ArticleIcon from "./../../../assets/icon/article.png";
import DonateIcon from "./../../../assets/icon/donate.png";
import SettingIcon from "./../../../assets/icon/setting.png";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: 1,
      setting: 0,
    };
  }

  handleGoingTo = () => {
    const token = window.sessionStorage.getItem("token");
    if (token !== null) {
      return "/donate";
    } else if (token === null) {
      return "/login-regis";
    }
  };

  render() {
    return (
      <div className="footer">
        <Link to="/">
          <div className="article" onClick={() => this.handleClickArticle}>
            <img src={ArticleIcon} alt="Article" className="article-icon" />
            <div className="article-death-active">Article</div>
          </div>
        </Link>
        <Link to={this.handleGoingTo}>
          <div className="donate">
            <img src={DonateIcon} alt="Donate" className="donate-icon" />
            <div>Donate</div>
          </div>
        </Link>
        <Link to="/setting">
          <div className="setting" onClick={() => this.handleClickSetting}>
            <img src={SettingIcon} alt="Setting" className="setting-icon" />
            <div className="setting-death-active">Setting</div>
          </div>
        </Link>
      </div>
    );
  }
}
