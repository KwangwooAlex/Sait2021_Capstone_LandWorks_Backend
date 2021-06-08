import { gql } from "apollo-server";

export default gql`
  type Query {
    seeProject(projectId: Int!): Project
  }
`;
