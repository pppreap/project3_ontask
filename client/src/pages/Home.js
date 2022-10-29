import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache"
  });

  const projectList = data?.projects || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to OnTask App!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Project List</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {projectList.map((project) => {
              return (
                <li key={project._id}>
                  <Link to={{ pathname: `/project/${project._id}` }}>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new project?</h2>
        <Link to="/project">
          <button className="btn btn-lg btn-link">Login</button>
        </Link>
        <Link to="/project">
          <button className="btn btn-lg btn-link">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
