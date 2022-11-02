import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      name: $name
      username: $username
      email: $email
      password: $password
    ) {
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
      user
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
      user
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
