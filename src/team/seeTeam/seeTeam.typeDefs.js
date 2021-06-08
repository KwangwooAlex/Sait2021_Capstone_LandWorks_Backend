import { gql } from "apollo-server";

export default gql`
  type Query {
    seeTeam(teamName: String!): Team
  }
`;
