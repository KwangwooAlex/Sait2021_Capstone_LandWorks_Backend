import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editRole(roleName: String!, teamId: Int!, userId: Int!): MutationResponse!
  }
`;
