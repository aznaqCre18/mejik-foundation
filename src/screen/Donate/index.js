import React, { Component } from "react";

import "./../../style/Donate/style.scss";
import HeaderDonate from "./../../component/molecules/HeaderDonate";
import FooterDonate from "./../../component/molecules/FooterDonation";
import TargetCategory from "./../../component/atoms/target-category";
import Target from "./../../component/atoms/target";
import SeeAll from "./../../component/atoms/seeAll";
import Amount from "./../../component/atoms/amount";
import Timeline from "./../../component/atoms/Timeline";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      benefId: "",
      amount: "",
      timeline: "",
      total: "",
    };
  }

  handleGetBenefId = (value) => {
    this.setState({
      benefId: value,
    });
  };

  handleGetAmount = (value) => {
    this.setState({
      amount: value,
    });
  };

  handleGetTimeline = (value) => {
    this.setState({
      timeline: value,
    });
  };

  render() {
    let total = 0;
    total = this.state.amount * this.state.timeline;
    console.log(total);
    return (
      <div className="container-donation">
        <HeaderDonate />
        <div className="main-container-donation">
          <div className="title-target">Donation Target</div>
          <TargetCategory />
          <div className="beficiaries-container">
            <Target click={this.handleGetBenefId} />
            <SeeAll />
          </div>
          <div className="title-target">Donation Amount</div>
          <div className="input-amount-container">
            <input
              type="number"
              placeholder="e.g. Rp.100.000"
              className="input-amount"
            />
            <Amount getAmount={this.handleGetAmount} />
          </div>
          <div className="title-target">Timeline</div>
          <Timeline getTimeline={this.handleGetTimeline} />
        </div>
        <FooterDonate
          total={total}
          benefId={this.state.benefId}
          amount={this.state.amount}
          timeline={this.state.timeline}
        />
      </div>
    );
  }
}
