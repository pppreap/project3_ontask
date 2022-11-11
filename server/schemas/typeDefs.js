const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
    allProjects: [Project]
    oneProject(_id: ID!): Project
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
  }

  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProject(title: String!, description: String!): Project
    updateProject(projectId: ID, title: String!, description: String!): Project
    removeProject(projectId: ID): Project
  }
`;

module.exports = typeDefs;

