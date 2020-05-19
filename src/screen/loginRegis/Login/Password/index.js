import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "@apollo/react-components";

import "./../../../../style/LoginRegis/style.scss";
import BackButton from "../../../../component/atoms/BackButton";
import InputPassword from "../../../../component/atoms/LoginRegis/Login/InputPassword";
import ButtonConinue from "../../../../component/atoms/LoginRegis/Login/ButtonContinue";
import { Redirect } from "react-router-dom";

const LOGIN = gql`
  mutation login($email: EmailAddress!, $password: String) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        id
        firstName
        lastName
        email
        phoneNumber
      }
    }
  }
`;

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: window.sessionStorage.getItem("email"),
      password: "",
      errors: null,
    };
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = (login) => {
    login({
      variables: { email: this.state.email, password: this.state.password },
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error) => {
        return error.message;
      });
      this.setState({ errors });
    });
  };
  render() {
    return (
      <Mutation mutation={LOGIN} errorPolicy="none">
        {(login, { data, loading }) => {
          if (data) {
            console.log(data);
            window.sessionStorage.setItem("token", data.login.token);
            window.sessionStorage.setItem("idUser", data.login.user.id);
            window.sessionStorage.removeItem("email");

            const token = window.sessionStorage.getItem("token");

            if (token === data.login.token) {
              return <Redirect to="/" />;
            }
          }

          return (
            <div className="container-login-password">
              <BackButton link="/login-email" />
              <div className="image-here">
                <div className="inner"></div>
              </div>
              <div className="title">Password</div>
              <div className="subtitle">
                Please enter your password to can log in to application
              </div>
              <InputPassword change={this.handlePasswordChange} />
              {this.state.errors !== null ? (
                <div className="invalid-login">Invalid Email or Password</div>
              ) : null}
              <ButtonConinue
                click={() => this.handleLogin(login)}
                load={loading}
              />
            </div>
          );
        }}
      </Mutation>
    );
  }
}
