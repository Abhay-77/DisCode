import { Link } from "react-router-dom";
import { signInUser } from "../data";
import { useState } from "react";

export default ({ setPage }) => {
  const [formData, setFormData] = useState({
    username: "a",
    email: "b",
    password: "c",
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    signInUser(formData);
  }
  return (
    <>
      <section className="loginbox">
        <h1 className="heading">Sign in</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            <h2>Username</h2>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={formData.username}
              required
            />
          </label>
          <label htmlFor="email">
            <h2>Email</h2>
            <input
              type="text"
              placeholder="Your email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </label>
          <label htmlFor="password">
            <h2>Password</h2>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </label>
          <button type="submit">Sign in</button>
        </form>
        <h3>
          Already have an existing account?
          <Link to="/login" onClick={() => setPage("login")}>
            Log in
          </Link>
        </h3>
      </section>
    </>
  );
};
