import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_xxx } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_xxx, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to xxxx!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of xxx you can vote on:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {xxxxList.map((xxx) => {
              return (
                <li key={xxx._id}>
                  <Link to={{ pathname: `/xxx/${mxxx._id}` }}>
                    {mxxxx.x1} vs. {xxx.x2}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new xxxx?</h2>
        <Link to="/xxx">
          <button className="btn btn-lg btn-danger">Create xxxx!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
