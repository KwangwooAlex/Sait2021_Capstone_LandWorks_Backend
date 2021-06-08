import { gql } from "apollo-server";

export default gql`
  type Project {
    id: Int!
    projectName: String!
    projectStatus: String!
    projectType: String!
    description: String!
    securityLevel: String!
    team: Team!
    createdAt: String!
    updatedAt: String!
  }
`;
