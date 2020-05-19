import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "@apollo/react-components";

import "./../../style/SettingPage/style.scss";
import BeforeLogin from "./../../component/molecules/Setting/BeforeLogin";
import AfterLogin from "./../../component/molecules/Setting/AfterLogin";
import Footer from "../../component/molecules/Footers";

const USER = gql`
  query($id: String) {
    user(id: $id) {
      firstName
      lastName
      email
      phoneNumber
    }
  }
`;

export default class index extends Component {
  render() {
    const token = window.sessionStorage.getItem("token");
    return (
      <Query query={USER}>
        {({ data }) => {
          let dataUser = null;
          if (data) {
            dataUser = data.user;
          }
          return (
            <div>
              {token === null ? (
                <BeforeLogin />
              ) : (
                <AfterLogin data={dataUser} />
              )}
              <div className="footers-landing">
                <Footer />
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
