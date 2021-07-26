import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createTeam(
      teamName: String!
      description: String
    ): CreateTeamMutationResult!
  }
  type CreateTeamMutationResult {
    ok: Boolean!
    error: String
    id: Int
    user: User
  }
`;
