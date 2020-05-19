import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "@apollo/react-components";

import "./../../../style/Payment/style.scss";
import HeaderPayment from "./../../../component/molecules/HeaderPayment";
import InfoTransfer from "./../../../component/molecules/infoTransfer";
import BillSumary from "./../../../component/molecules/BillSumary";
import Upload from "./../../../component/molecules/Upload";
import ButtonConfirm from "./../../../component/atoms/ButtonConfirm";

const GET_BENEF = gql`
  query addId($id: String!) {
    beneficiary(id: $id) {
      firstName
      lastName
      categories {
        name
      }
    }
  }
`;

const benefId = window.localStorage.getItem("benefId");

export default class index extends Component {
  render() {
    return (
      <Query query={GET_BENEF} variables={{ id: benefId }}>
        {({ data, loading }) => {
          let dataBenef = null;
          if (data) {
            dataBenef = data.beneficiary;
          }

          let total = window.localStorage.getItem("total");

          return (
            <div>
              <HeaderPayment />
              <InfoTransfer />
              <div className="separator"></div>
              <div className="title-bill">Bill Sumary</div>
              <BillSumary data={dataBenef} />
              <div className="total-amount">
                <div className="total">Total</div>
                <div className="total-value">Rp.{total}</div>
              </div>
              <Upload />
              <ButtonConfirm />
            </div>
          );
        }}
      </Query>
    );
  }
}
