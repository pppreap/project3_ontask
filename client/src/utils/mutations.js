import { gql } from '@apollo/client';

export const CREATE_xxx = gql`
  mutation createxxx($tech1: String!, $xxx2: String!) {
    createxxx(x1: $x1, x2: $x2) {
      _id
      x1
      x2
    }
  }
`;

export const CREATE_xxx = gql`
  mutation createxxx($_id: String!, $xxNum: Int!) {
    createxxx(_id: $_id, xNum: $xxNum) {
      _id
      x1
      x2
      x1_x
      x2_x
    }
  }
`;
