import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ONE_PROJECT } from "../utils/queries";
import { REMOVE_PROJECT } from "../utils/mutations";

function ProjectPage() {
  let { id } = useParams();

  const { loading, data } = useQuery(ONE_PROJECT, {
    variables: { id: id },
  });

  const project = data?.oneProject || [];

  const [removeProject, { loading: removeLoading, data: removeData }] =
    useMutation(REMOVE_PROJECT);

  const handleDelete = async (e, projectId) => {
    e.preventDefault();

    try {
      await removeProject({
        variables: { projectId },
      });
      window.location.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Link to="/">
        <button className="btn mr-5">Return home</button>
      </Link>
      {!project.complete ? (
        <div className="App-header mx-5">NOT FINISHED</div>
      ) : (
        <h2 className="App-header mx-5">Finished. Ready to delete?</h2>
      )}
      <div className="text-center">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <button className="btn" onClick={(e) => handleDelete(e, project._id)}>
          Delete
        </button>
        <Link className="mx-4" to={`/project/${project._id}/update`}>
        <button className="btn">Edit</button>
        </Link>
      </div>
    </>
  );
}

export default ProjectPage;
