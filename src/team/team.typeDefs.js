import { gql } from "apollo-server";

export default gql`
  type Team {
    id: Int!
    teamName: String!
    teamMember: [User]
    project: [Project]
  }
`;
