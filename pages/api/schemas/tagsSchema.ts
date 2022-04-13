import { gql } from 'apollo-server-micro';

const tagsTypeDef = gql`
  type TagsResponse {
    tags: [String!]
  }

  type Query {
    getTags: TagsResponse
  }
`;

export default tagsTypeDef;
