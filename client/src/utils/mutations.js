import { gql } from '@apollo/client';


export const ADD_PROJECT = gql`
  mutation addProject(input:projectInput) {
    addProject(input:projectInput) {
      _id
      title
      description
      complete
      user
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(projectId,input:projectInput) {
    updateProject(projectId,input:projectInput) {
      _id
      title
      description
      complete
      user
    }
  }
`;

export const REMOVE_PROJECT = gql`
  mutation removeProject(projectId) {
    removeProject(projectId) {
      _id
      title
      description
      complete
      user
    }
  }
`;
