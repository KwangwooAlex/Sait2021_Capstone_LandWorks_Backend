import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    companyName: String!
    phoneNumber: String!
    team: [Team]
  }
`;
