import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class index extends Component {
  handleSetLocalStorage = () => {
    window.localStorage.setItem("benefId", this.props.benefId);
    window.localStorage.setItem("amount", this.props.amount);
    window.localStorage.setItem("total", this.props.total);
    window.localStorage.setItem("timeline", this.props.timeline);
  };

  render() {
    return (
      <div className="footer-donation">
        <div className="total">
          <div className="total-title">Total Donation</div>
          <div className="total-amount">Rp.{this.props.total}</div>
        </div>
        <Link to="/payment">
          <div
            className="button-donate"
            onClick={() => this.handleSetLocalStorage()}
          >
            DONATE NOW
          </div>
        </Link>
      </div>
    );
  }
}
