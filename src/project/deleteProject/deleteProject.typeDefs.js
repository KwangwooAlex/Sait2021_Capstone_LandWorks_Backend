import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteProject(projectId: Int!): MutationResponse!
  }
`;
