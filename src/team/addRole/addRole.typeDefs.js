import { gql } from "apollo-server";

export default gql`
  type Mutation {
    addRole(roleName: String!, teamId: Int!, userId: Int!): MutationResponse!
  }
`;
