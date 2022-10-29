import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUsert($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    _id
    username
    email
    }
  }
`;


export const ADD_PROJECT = gql`
  mutation addProject($projectInput) {
    addProject(projectInput:$projectInput) {
      _id
      title
      description
      complete
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($projectId,$projectInput) {
    updateProject(projectId:$projectId,projectInput:$projectInput) {
      _id
      title
      description
      complete
    }
  }
`;

export const REMOVE_PROJECT = gql`
  mutation removeProject($projectId) {
    removeProject(projectId:$projectId) {
      _id
    }
  }
`;
