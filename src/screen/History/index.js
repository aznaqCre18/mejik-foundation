import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "@apollo/react-components";
// import { Skeleton } from "antd";

import "./../../style/History/style.scss";
import Header from "./../../component/molecules/HeaderHistory";
import HistoryList from "./../../component/molecules/HistoryList";

const HISTORY = gql`
  query($idUser: String) {
    transactions(orderBy: createdAt_DESC, where: { createdById: $idUser }) {
      amount
      timeline
      beneficiary {
        firstName
        lastName
        categories {
          name
        }
      }
    }
  }
`;

export default class index extends Component {
  render() {
    return (
      <Query
        query={HISTORY}
        variables={{ idUser: window.sessionStorage.getItem("idUser") }}
      >
        {({ data }) => {
          let historyList = null;
          if (data) {
            historyList = data.transactions;
          }
          return (
            <div className="setting-container">
              <Header />
              {data
                ? historyList.map((data, i) => {
                    return <HistoryList data={data} key={i} />;
                  })
                : null}
            </div>
          );
        }}
      </Query>
    );
  }
}
