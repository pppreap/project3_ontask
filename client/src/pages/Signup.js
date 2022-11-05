import React, { useState } from "react";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // eslint-disable-next-line
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...formData },
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <form className="signup text-center" onSubmit={handleSubmit}>
      <h3 className="mb-4">Sign Up</h3>
      <label className="mx-3">Username:</label>
      <input
        type="text"
        name='username'
        onChange={handleFormChange}
        value={formData.username}
        required
      />
      <label className="mx-3">Email:</label>
      <input
        type="email"
        name="email"
        onChange={handleFormChange}
        value={formData.email}
        required
      />
      <label className="mx-3">Password:</label>
      <input
        type="password"
        name="password"
        onChange={handleFormChange}
        value={formData.password}
        className="mb-4"
      />
      <br />
      <button type="submit" className="btn">Sign Up</button>
    </form>
  );
};

export default Signup;
