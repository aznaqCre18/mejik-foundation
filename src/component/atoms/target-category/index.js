import React, { Component } from "react";
import $ from "jquery";
import gql from "graphql-tag";
import { Query } from "@apollo/react-components";

const CATEGORYS = gql`
  query {
    categories(orderBy: name_DESC) {
      id
      name
    }
  }
`;

export default class index extends Component {
  componentDidMount() {
    $(document).on("click", ".inner-span", function () {
      $(this).addClass("activ").siblings().removeClass("activ");
    });
  }

  state = {
    categoryId: "",
  };

  getValueCategory = (event) => {
    this.setState({
      categoryId: event.target.value,
    });
  };

  render() {
    return (
      <Query query={CATEGORYS}>
        {({ data, loading }) => {
          return (
            <div className="target-category">
              <span className="inner-span activ">All</span>
              {data
                ? data.categories.map((value) => {
                    return (
                      <span id="category" className="inner-span" key={value.id}>
                        <input
                          type="radio"
                          className="check-box"
                          value={value.id}
                          name="selected-category"
                          id={value.name}
                          style={{ display: "none" }}
                          onChange={this.getValueCategory}
                        />
                        <label htmlFor={value.name} className="label">
                          {value.name}
                        </label>
                      </span>
                    );
                  })
                : null}
            </div>
          );
        }}
      </Query>
    );
  }
}
