import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
      projects
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query projects($_id: String) {
   projects(_id: $_id) {
      _id
      title
      description
      complete
      user
    }
  }
`;
