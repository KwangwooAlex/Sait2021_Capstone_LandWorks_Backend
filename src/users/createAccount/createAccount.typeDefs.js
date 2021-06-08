import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createAccount(
      username: String!
      email: String
      companyName: String!
      phoneNumber: String!
      password: String!
    ): MutationResponse!
  }
`;
