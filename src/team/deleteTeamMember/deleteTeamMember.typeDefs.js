import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteTeamMember(teamId: Int!, teamMemberId: Int!): MutationResponse!
  }
`;
