import { gql } from 'apollo-server-micro';

const favoritesTypeDef = gql`
  scalar Date

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

  type Mutation {
    createFavorite(slug: String!): SingleArticleResponse
    deleteFavorite(slug: String!): SingleArticleResponse
  }
`;

export default favoritesTypeDef;
