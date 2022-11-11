import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { ALL_PROJECTS, ONE_PROJECTS } from "../utils/queries";
import { ADD_PROJECT } from "../utils/mutations";
import Auth from "../utils/auth";

const Project = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    complete: false,
  });

  const [addProject, { error }] = useMutation(ADD_PROJECT);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const token = Auth.loggedIn() ? Auth.getToken() : null

    // if (!token) {
    //   return false
    // }

    try {
      const { data } = await addProject({
        variables: { ...project },
      });
    } catch (err) {
      console.error(err);
    }

    setProject({
      title: "",
      description: "",
      complete: false,
    });

    window.location.replace('/')
  };

  return (
    <>
      <form className="login text-center" onSubmit={handleSubmit}>
        <h3 className="mb-5">Add New Project</h3>
        <label className="mx-3">Title:</label>
        <input
          name="title"
          type="text"
          onChange={handleFormChange}
          value={project.title}
          required
        />
        <label className="mx-3">Description:</label>
        <input
          name="description"
          type="text"
          onChange={handleFormChange}
          value={project.description}
          className="mb-4"
          required
        /> 
        <br />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </>
  );
};

export default Project;
