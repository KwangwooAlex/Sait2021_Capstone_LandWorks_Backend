import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createTeam(teamName: String!): MutationResponse!
  }
`;
