import React, { Component } from "react";

import "./../../../../style/LoginRegis/style.scss";
import BackButton from "../../../../component/atoms/BackButton";
import InputEmail from "../../../../component/atoms/LoginRegis/Login/InputEmail";
import ButtonNext from "../../../../component/atoms/LoginRegis/Login/ButtonNext";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleButtonNext = () => {
    window.sessionStorage.setItem("email", this.state.email);
  };

  render() {
    return (
      <div className="container-login-email">
        <BackButton link="/login-regis" />
        <div className="image-here">
          <div className="inner"></div>
        </div>
        <div className="title">Email</div>
        <div className="subtitle">
          Please enter your registered email to log in to application
        </div>
        <InputEmail change={this.handleEmailChange} />
        <ButtonNext onclick={() => this.handleButtonNext()} />
      </div>
    );
  }
}
