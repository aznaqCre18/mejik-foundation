import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <>
        {this.props.load ? (
          <div className="continue-button" onClick={this.props.click}>
            Loading...
          </div>
        ) : (
          <div className="continue-button" onClick={this.props.click}>
            Continue
          </div>
        )}
      </>
    );
  }
}
