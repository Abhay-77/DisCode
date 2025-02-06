import { Link } from "react-router-dom";

const LoginBox = () => {
  return (
    <>
      <section className="loginbox">
        <h1 className="heading">LOGIN</h1>
        <br />
        <br />
        <form action="">
          <label htmlFor="username">
            <h2>Username</h2>
            <input type="text" placeholder="Username" />
          </label>
          <label htmlFor="password">
            <h2>Password</h2>
            <input type="text" placeholder="Password" />
          </label>
        </form>
        <h3>
          Don't have an existing account? <Link>Sign up</Link>
        </h3>
      </section>
    </>
  );
};

export default LoginBox;
