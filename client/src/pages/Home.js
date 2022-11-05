import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import Auth from "../utils/auth";

const Home = () => {

  const { loading, data } = useQuery(GET_ME);
  const user = data?.me || {}

  const projectList = data?.projects || [];

  return (
    <div className="container-fluid bg-white card-rounded w-75 border">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to OnTask App!</h1>
        {Auth.loggedIn() ? (
          <button className="btn" onClick={Auth.logout}>Logout</button>
        ) : null }
      </div>
      <div className="card-body text-center">
        <h2>Project List</h2>
         {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {projectList.map((project) => {
              return (
                <li key={project._id}>
                  <Link to={{ pathname: `/project/${project._id}` }}></Link>
                </li>
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
