import React, { Component } from "react";

import "./../../../style/LoginRegis/style.scss";
import LoginButton from "./../../../component/atoms/LoginRegis/Landing/ButtonLogin";
import RegisterButton from "./../../../component/atoms/LoginRegis/Landing/ButtonRegister";
import BackButton from "./../../../component/atoms/BackButton";

export default class index extends Component {
  render() {
    return (
      <div className="container-login-regis">
        <BackButton link="/" />
        <div className="image-here">
          <div className="inner"></div>
        </div>
        <div className="title">Welcome to Mejik Foundation!</div>
        <div className="subtitle">
          Mejik Foundation is a network that facillitates and empowers the voice
          of mejik communities
        </div>
        <LoginButton />
        <RegisterButton />
      </div>
    );
  }
}
