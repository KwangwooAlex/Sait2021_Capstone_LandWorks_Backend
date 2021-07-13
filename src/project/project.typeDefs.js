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
    startDate: String
    endDate: String
    createdAt: String!
    updatedAt: String!
  }
`;
