const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type xx {
    _id: ID!
    name: String!
  }

  type xxx {
    _id: ID!
    x1: String!
    x2: String!
    x1_votes: Int
    x2_votes: Int
  }

  type Query {
    x: [x]
    x(_id: String): [x]
  }

  type Mutation {
    createx(x1: String!, x2: String!): x
    createx(_id: String!, xNum: Int!): x
  }
`;

module.exports = typeDefs;

