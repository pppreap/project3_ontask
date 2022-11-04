import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { ALL_PROJECTS, ONE_PROJECTS } from "../utils/queries";
import { ADD_PROJECT } from '../utils/mutations'
import Auth from '../utils/auth'

const ProjectPage = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    complete: false,
  });

  const { allLoading, data } = useQuery(ALL_PROJECTS);
  const projectsArray = data?.allProjects || [];

  const {
    loading: oneLoading,
    data: oneData,
    error: oneError,
  } = useQuery(ONE_PROJECTS, {
    variables: { id: projectId },
  });

  const [addProject, { addError }] = useMutation(ADD_PROJECT)

  if (allLoading || oneLoading) {
    return <h2>LOADING...</h2>
  }

  return (
    <>
    {!Auth.loggedIn()}
    </>
  )
};
