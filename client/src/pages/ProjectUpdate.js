import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UPDATE_PROJECT } from "../utils/mutations";
import { ONE_PROJECT } from "../utils/queries";

function ProjectUpdate() {
    let { id } = useParams()

    const { loading, data } = useQuery(ONE_PROJECT, {
        variables: { id: id}
    })

    const projectData = data?.oneProject || []

    console.log(projectData._id)
    const [project, setProject] = useState({
        _id: projectData._id,
        title: projectData.title,
        description: projectData.description,
        complete: false
    })

    const [updateProject, { error }] = useMutation(UPDATE_PROJECT)

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setProject({ ...project, [name]: value })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(project)
        try {
            const { data } = await updateProject({
                variables: { ...project }
            })
        } catch (err) {
            console.error(err)
        }
        window.location.replace('/')
    }
    return (
        <>
         <form className="login text-center" onSubmit={handleSubmit}>
        <h3 className="mb-5">Update Project</h3>
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
          Update
        </button>
      </form>
        </>
    )
}

export default ProjectUpdate;