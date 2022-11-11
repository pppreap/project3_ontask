import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      projects {
        _id
        title
        description
        complete
      }
    }
  }
`;

export const ALL_PROJECTS = gql`
  query allProjects {
    allProjects {
      _id
      title
      description
      complete
    }
  }
`;

export const ONE_PROJECT = gql`
  query oneProject($id: ID!) {
    oneProject(_id: $id) {
      _id
      title
      description
      complete
    }
  }
`;
