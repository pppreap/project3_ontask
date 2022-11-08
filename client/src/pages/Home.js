import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME, ALL_PROJECTS } from "../utils/queries";
import { REMOVE_PROJECT } from '../utils/mutations';
import Auth from "../utils/auth";

const Home = () => {

  const { loading: meLoading, data: meData } = useQuery(GET_ME);
  // eslint-disable-next-line
  const user = meData?.me || {}
  // eslint-disable-next-line
  const { loading: projectLoading, data: projectData } = useQuery(ALL_PROJECTS)
  const projectArr = projectData?.allProjects || [];

  const [removeProject, { loading: removeLoading, data: removeData }] = useMutation(REMOVE_PROJECT)

  console.log(projectArr)

  const handleDelete = async (e, projectId) => {
    e.preventDefault()
    
    try {
      await removeProject({
        variables: { projectId }
      })
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container-fluid bg-white card-rounded w-75 border">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to OnTask App!</h1>
        {Auth.loggedIn() ? (
          <button className="btn" onClick={Auth.logout}>Logout</button>
        ) : null }
      </div>
      <div className="card-body text-center">
        <h2 className="mt-4">Project List</h2>
         {meLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {projectArr.map((project) => {
              return (
                <div key={project._id} className="card mx-4">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <button onClick={(e) => handleDelete(e, project._id)}>Delete</button>
                </div>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new project?</h2>
        {!Auth.loggedIn() ? (
          <>
            <Link className="mx-4" to="/login">
              <button className="btn btn-lg btn-warning">Login</button>
            </Link>
            <Link className="mx-4" to="/signup">
              <button className="btn btn-lg btn-warning">Signup</button>
            </Link>
          </>
        ) : (
          <Link to="/project">
            <button className="btn">Add Project</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
