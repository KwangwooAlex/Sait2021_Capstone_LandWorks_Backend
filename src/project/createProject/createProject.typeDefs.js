import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createProject(
      teamId: Int!
      projectName: String!
      projectStatus: String!
      projectType: String!
      description: String!
      securityLevel: String!
    ): MutationResponse!
  }
`;
