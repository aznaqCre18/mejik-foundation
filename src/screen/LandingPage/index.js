import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "@apollo/react-components";

import "./../../style/LandingPage/style.scss";
import Footer from "./../../component/molecules/Footers";
import HeaderArticle from "./../../component/molecules/HeaderArticle";
import ArticleList from "./../../component/molecules/ArticleList";

const ARTICLE = gql`
  query {
    articles(orderBy: createdAt_DESC) {
      id
      title
      description
      imageUrl
    }
  }
`;

export default class index extends Component {
  render() {
    return (
      <Query query={ARTICLE}>
        {({ data, error, loading }) => {
          return (
            <>
              <HeaderArticle />
              <div className="main-container">
                {data
                  ? data.articles.map((value, index) => {
                      return <ArticleList title={value.title} key={index} />;
                    })
                  : null}
              </div>
              <div className="footers-landing">
                <Footer />
              </div>
            </>
          );
        }}
      </Query>
    );
  }
}
