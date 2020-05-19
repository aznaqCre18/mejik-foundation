import React, { Component } from "react";
import $ from "jquery";
import gql from "graphql-tag";
import { Query } from "@apollo/react-components";

import Profile from "./../../../assets/icon/profile.png";
import Check from "./../../../assets/icon/check.png";

const BENEFICIARIES = gql`
  query {
    beneficiaries(orderBy: createdAt_DESC, limit: 5) {
      id
      firstName
      lastName
      categories {
        id
        name
      }
    }
  }
`;

export default class index extends Component {
  componentDidMount() {
    $(document).on("click", ".target-container", function () {
      $(this).addClass("on-selected").siblings().removeClass("on-selected");
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      benefId: "",
    };
  }

  getIdTerget = (event) => {
    this.setState({
      benefId: event.target.value,
    });
  };

  render() {
    return (
      <Query query={BENEFICIARIES}>
        {({ data, loading }) => {
          return (
            <>
              {data
                ? data.beneficiaries.map((value, i) => {
                    return (
                      <div className="target-container" key={i}>
                        <input
                          type="radio"
                          id={value.id}
                          name="target"
                          value={value.id}
                          style={{ display: "none" }}
                          onChange={this.getIdTerget}
                        />
                        <label
                          htmlFor={value.id}
                          style={{
                            position: "absolute",
                            fontSize: 40,
                            padding: 42,
                            paddingLeft: 25,
                            paddingRight: 25,
                            opacity: 0,
                            cursor: "pointer",
                          }}
                          onClick={() => this.props.click(this.state.benefId)}
                        >
                          KLIK
                        </label>
                        <div className="profile-pict">
                          <img src={Profile} alt="Profile" />
                        </div>
                        <div className="name-target">
                          {value.firstName + " " + value.lastName}
                        </div>
                        <div className="category">
                          {value.categories.map((category) => {
                            return category.name === null ? "-" : category.name;
                          })}
                        </div>
                        <img
                          style={{ display: "none" }}
                          src={Check}
                          alt="Check"
                          className="check"
                        />
                      </div>
                    );
                  })
                : null}
            </>
          );
        }}
      </Query>
    );
  }
}
