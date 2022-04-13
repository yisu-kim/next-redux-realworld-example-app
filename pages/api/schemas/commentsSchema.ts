import { gql } from 'apollo-server-micro';

const commentsTypeDef = gql`
  scalar Void

  input NewComment {
    body: String!
  }

  type Comment {
    id: ID!
    createdAt: String!
    updatedAt: String!
    body: String!
    author: Profile!
  }

  type SingleCommentResponse {
    comment: Comment!
  }

  type MultipleCommentsResponse {
    comments: [Comment!]
  }

  type Query {
    getComments(slug: String!): MultipleCommentsResponse
  }

  type Mutation {
    createComment(slug: String!, comment: NewComment!): SingleCommentResponse
    deleteComment(slug: String!, id: Int!): Void
  }
`;

export default commentsTypeDef;
