import { gql } from 'apollo-server-micro';

const articlesTypeDef = gql`
  scalar Date
  scalar Void

  input NewArticle {
    title: String!
    description: String!
    body: String!
    tagList: [String]
  }

  input CurrentArticle {
    title: String
    description: String
    body: String
  }

  type Article {
    slug: String!
    title: String!
    description: String!
    body: String!
    tagList: [String!]
    createdAt: Date!
    updatedAt: Date!
    favorited: Boolean!
    favoritesCount: Int!
    author: Profile!
  }

  type SingleArticleResponse {
    article: Article!
  }

  type MultipleArticlesResponse {
    articles: [Article!]
    articlesCount: Int!
  }

  type Query {
    getArticlesFeed(limit: Int, offset: Int): MultipleArticlesResponse
    getArticles(
      tag: String
      author: String
      favorited: String
      limit: Int
      offset: Int
    ): MultipleArticlesResponse
    getArticle(slug: String!): SingleArticleResponse
  }

  type Mutation {
    createArticle(article: NewArticle!): SingleArticleResponse
    updateArticle(
      slug: String!
      article: CurrentArticle!
    ): SingleArticleResponse
    deleteArticle(slug: String!): Void
  }
`;

export default articlesTypeDef;
