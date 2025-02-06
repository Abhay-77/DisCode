import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../data";
import { useState } from "react";

const LoginBox = ({ setPage }) => {
  const [id, setId] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const t = loginUser(formData);
    setId(t);
    if (t != null) {
      navigate("/");
    }
  }
  return (
    <>
      <section className="loginbox">
        <h1 className="heading">Login</h1>
        <form onSubmit={handleSubmit}>
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
          Don't have an existing account?{" "}
          <Link to="/signin" onClick={() => setPage("signin")}>
            Sign up
          </Link>
        </h3>
      </section>
    </>
  );
};

export default LoginBox;
