import { Link } from "react-router-dom";

export default ({ setPage }) => {
  return (
    <>
      <section className="loginbox">
        <h1 className="heading">Sign in</h1>
        <form action="">
          <label htmlFor="username">
            <h2>Username</h2>
            <input type="text" placeholder="Username" />
          </label>
          <label htmlFor="username">
            <h2>Email</h2>
            <input type="text" placeholder="Your email" />
          </label>
          <label htmlFor="password">
            <h2>Password</h2>
            <input type="text" placeholder="Password" />
          </label>
          <button type="submit">Sign in</button>
        </form>
        <h3>
          Already have an existing account?{" "}
          <Link to="/" onClick={() => setPage("login")}>
            Log in
          </Link>
        </h3>
      </section>
    </>
  );
};
