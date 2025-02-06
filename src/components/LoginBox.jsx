import { Link } from "react-router-dom";

const LoginBox = ({setPage}) => {
  return (
    <>
      <section className="loginbox">
        <h1 className="heading">Login</h1>
        <form action="">
          <label htmlFor="username">
            <h2>Email</h2>
            <input type="text" placeholder="Your email" />
          </label>
          <label htmlFor="password">
            <h2>Password</h2>
            <input type="text" placeholder="Password" />
          </label>
          <button type="submit">Login</button>
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
