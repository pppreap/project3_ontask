const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    _id: ID
    username: String
    email: String
    projects: [Project]
  }

  type Project {
    _id: ID
    title: String
    description: String
    complete: Boolean
    user: User
  }

  type Auth {
    token: ID
    user: User
  }

  input projectInput {
    _id: ID
    title: String
    description: String
    complete: Boolean
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProject(input: projectInput): User
    updateProject(projectId: ID, input: projectInput): Project
    removeProject(projectId: ID): User
  }
`;

module.exports = typeDefs;
