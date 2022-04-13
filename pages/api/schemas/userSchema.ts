import { gql } from 'apollo-server-micro';

const userTypeDef = gql`
  input LoginUser {
    email: String!
    password: String!
  }

  input NewUser {
    username: String!
    email: String!
    password: String!
  }

  input CurrentUser {
    email: String
    token: String
    username: String
    bio: String
    image: String
  }

  type User {
    email: String!
    token: String!
    username: String!
    bio: String
    image: String!
  }

  type UserResponse {
    user: User!
  }

  type Query {
    getCurrentUser: UserResponse
  }

  type Mutation {
    createLoginUser(user: LoginUser!): UserResponse
    createNewUser(user: NewUser!): UserResponse
    updateCurrentUser(user: CurrentUser!): UserResponse
  }
`;

export default userTypeDef;
