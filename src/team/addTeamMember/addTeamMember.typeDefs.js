import { gql } from "apollo-server";

export default gql`
  type Mutation {
    addTeamMember(teamId: Int!, userId: Int): MutationResponse!
  }
`;
