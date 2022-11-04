import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
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

export const ONE_PROJECTS = gql`
  query oneProjects {
    oneProjects {
      _id
      title
      description
      complete
    }
  }
`;
