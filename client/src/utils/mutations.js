import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($input: projectInput!) {
    addProject(input: $input) {
      _id
      title
      description
      complete
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($projectId: ID, $input: projectInput) {
    updateProject(projectId: $projectId, input: $input) {
      _id
      title
      description
      complete
    }
  }
`;

export const REMOVE_PROJECT = gql`
  mutation removeProject($projectId: ID!) {
    removeProject(projectId: $projectId) {
      _id
    }
  }
`;
