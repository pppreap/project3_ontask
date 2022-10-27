import { gql } from '@apollo/client';

export const QUERY_xxx = gql`
  query xxx {
    xxx {
      _id
      name
    }
  }
`;

export const QUERY_xxx = gql`
  query xxx($_id: String) {
    xxx(_id: $_id) {
      _id
      xxx+
    }
  }
`;
