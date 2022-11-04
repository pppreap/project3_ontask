// import React from "react";
// import { useMutation, useQuery } from "@apollo/client";
// import { UPDATE_PROJECT, REMOVE_PROJECT } from "../utils/mutations";
// import { QUERY_USER } from "../utils/queries";

// const ProjectCard = (props) => {
//   const { loading, data } = useQuery(QUERY_USER);
//   const user = data?.me || {};

//   const handleRemoveProject = async (projectId) => {
//     const [removeProject, { error }] = useMutation(REMOVE_PROJECT);
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const { data } = await removeProject({
//         variables: { projectId },
//       });

//       if (error) {
//         throw new Error("Something went wrong");
//       }

//       //! local storage?????
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleUpdateProject = async (e, projectId) => {
//     const [updateProject, { error }] = useMutation(UPDATE_PROJECT);
//     e.preventDefault();
//     const { title, description } = e.target;
//     props.projectId(projectId);
//     props.title(title);
//     props.description(description);

//     try {
//       const { data } = await updateProject({
//         variables: {},
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   if (loading) {
//     return <h2>LOADING...</h2>;
//   }

//   return <></>;
// };
