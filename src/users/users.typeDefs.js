import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    companyName: String!
    phoneNumber: String!
    avatar: String
    birth: String
    country: String
    state: String
    city: String
    Street: String
    team: [Team]
  }
`;
