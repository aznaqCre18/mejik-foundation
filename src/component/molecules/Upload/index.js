import React, { Component } from "react";

import Vector from "./../../../assets/icon/upload.png";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
    };
  }

  handleChange = async (event) => {
    await this.setState({
      url: URL.createObjectURL(event.target.files[0]),
    });
  };

  render() {
    return (
      <>
        <div className="upload-cover">
          {this.state.url !== null ? (
            <img
              src={this.state.url}
              alt="Upload Pict"
              className="img-upload"
            />
          ) : (
            <>
              <img src={Vector} alt="Upload" />
              <input
                type="file"
                className="upload"
                onChange={this.handleChange}
              />
              <div>Upload Proof Here</div>
            </>
          )}
        </div>
      </>
    );
  }
}
