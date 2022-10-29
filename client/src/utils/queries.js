import { gql } from '@apollo/client';

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


