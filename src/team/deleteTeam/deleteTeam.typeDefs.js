import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteTeam(teamId: Int!): MutationResponse!
  }
`;
