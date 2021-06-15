import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editProfile(
      username: String
      email: String
      companyName: String
      phoneNumber: String
      password: String
      avatar: String
    ): MutationResponse!
  }
`;
