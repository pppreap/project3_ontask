import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_xxx} from '../utils/queries';
import { CREATE_xxx } from '../utils/mutations';

const xxx = () => {
  const { loading, data } = useQuery(QUERY_xx);

  const xxList = data?.xxx || [];

  const [formData, setFormData] = useState({
    x1: 'JavaScript',
    x2: 'JavaScript',
  });
  let navigate = useNavigate();

  const [createxxx, { error }] = useMutation(CREATE_xxx);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createxxx({
        variables: { ...formData },
      });

      navigate(`/xxx/${data.createxxx._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      x1: 'JavaScript',
      x2: 'JavaScript',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a xxx!</h1>
      </div>
      <div className="card-body m-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>x 1: </label>
            <select name="x1" onChange={handleInputChange}>
              {techList.map((x) => {
                return (
                  <option key={tx._id} value={x.name}>
                    {x.name}
                  </option>
                );
              })}
            </select>
            <label>x 2: </label>
            <select name="x2" onChange={handleInputChange}>
              {txList.map((x) => {
                return (
                  <option key={x._id} value={x.name}>
                    {x.name}
                  </option>
                );
              })}
            </select>
            <button className="btn btn-danger" type="submit">
              Create xxx!
            </button>
          </form>
        )}
      </div>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default xxx;

