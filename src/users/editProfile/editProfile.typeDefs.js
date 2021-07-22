import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editProfile(
      username: String
      email: String
      companyName: String
      phoneNumber: String
      password: String
      avatar: Upload
      birth: String
      country: String
      state: String
      city: String
      Street: String
    ): MutationResponse!
  }
`;
