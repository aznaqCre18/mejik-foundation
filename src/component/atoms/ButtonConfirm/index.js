import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import gql from "graphql-tag";
import { Mutation } from "@apollo/react-components";

const ADD_TRANSACTION = gql`
  mutation createTrans(
    $benefId: String!
    $amount: Float!
    $timeline: Int!
    $total: Float
  ) {
    createTransaction(
      input: {
        beneficiaryId: $benefId
        amount: $amount
        timeline: $timeline
        total: $total
      }
    ) {
      id
      amount
      timeline
      total
    }
  }
`;

let total = parseFloat(window.localStorage.getItem("total"));
let timeline = parseInt(window.localStorage.getItem("timeline"));
let amount = parseFloat(window.localStorage.getItem("amount"));
let benefId = window.localStorage.getItem("benefId");

export default class index extends Component {
  state = {
    errors: null,
  };

  handleCreateTrans = async (createTrans) => {
    await createTrans({
      variables: {
        benefId: benefId,
        amount: amount,
        timeline: timeline,
        total: total,
      },
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error) => {
        return error.message;
      });
      this.setState({ errors });
    });
  };

  render() {
    return (
      <Mutation mutation={ADD_TRANSACTION}>
        {(createTrans, { data, loading, error }) => {
          if (data) {
            window.localStorage.removeItem("total");
            window.localStorage.removeItem("benefId");
            window.localStorage.removeItem("amount");
            window.localStorage.removeItem("timeline");
            return <Redirect to="/" />;
          }
          return (
            <div className="button-container">
              {error ? <div>{error.toString()}</div> : null}
              <div
                className="button-confirm"
                onClick={() => this.handleCreateTrans(createTrans)}
                style={{ cursor: "pointer" }}
              >
                CONFIRMATION
              </div>
            </div>
          );
        }}
      </Mutation>
    );
  }
}
