import { gql } from "apollo-server";

export default gql`
  type Mutation {
    editProject(
      id: Int!
      projectName: String
      projectStatus: String
      projectType: String
      description: String
      securityLevel: String
    ): MutationResponse!
  }
`;
