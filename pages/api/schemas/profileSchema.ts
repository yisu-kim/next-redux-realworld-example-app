import { gql } from 'apollo-server-micro';

const profileTypeDef = gql`
  type Profile {
    username: String!
    bio: String
    image: String!
    following: Boolean
  }

  type ProfileResponse {
    profile: Profile!
  }

  type Query {
    getProfile(username: String!): ProfileResponse
  }

  type Mutation {
    createFollowing(username: String!): ProfileResponse
    deleteFollowing(username: String!): ProfileResponse
  }
`;

export default profileTypeDef;
