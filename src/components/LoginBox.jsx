import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../data";
import { useState, useActionState, useEffect } from "react";

const LoginBox = ({ setPage }) => {
  const [id, setId] = useState(null);
  const initialState = { message: null, errors: {}, success: false };
  const loginUserWithId = loginUser.bind(null, setId);
  const [state, formAction] = useActionState(loginUserWithId, initialState);
  const navigate = useNavigate();
  useEffect(() => {
    if (state.success) navigate("/");
  }, [state.success]);

  return (
    <>
      <section className="loginbox">
        <h1 className="heading">Login</h1>
        <form action={formAction}>
          <label htmlFor="email">
            <h2>Email</h2>
            <input type="text" placeholder="Your email" name="email" />
            {state?.errors?.email?.map((error) => (
              <p>{error}</p>
            ))}
          </label>
          <label htmlFor="password">
            <h2>Password</h2>
            <input type="password" placeholder="Password" name="password" />

            {state?.errors?.password?.map((error) => (
              <p>{error}</p>
            ))}
          </label>
          <button type="submit">Login</button>
        </form>
        <h3>
          Don't have an existing account?{" "}
          <Link to="/signin" onClick={() => setPage("signin")}>
            Sign Up
          </Link>
        </h3>
      </section>
    </>
  );
};

export default LoginBox;
