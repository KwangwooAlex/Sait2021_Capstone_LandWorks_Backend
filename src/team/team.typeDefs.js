import { gql } from "apollo-server";

export default gql`
  type Team {
    id: Int!
    teamName: String!
    teamMember: [User]
    project: [Project]
    role: [Role]
  }

  type Role {
    id: Int!
    roleName: String!
    teamId: Int!
    userId: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
