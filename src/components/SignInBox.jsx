import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../data";
import { useActionState, useEffect } from "react";

export default ({ setPage }) => {
  const initialState = { message: null, errors: {}, success: false };
  const [state, formAction] = useActionState(signInUser, initialState);
  const navigate = useNavigate();
  useEffect(() => {
    if (state.success) {
      navigate("/login");
      setPage("login");
    }
  }, [state.success]);
  return (
    <>
      <section className="loginbox">
        <h1 className="heading">Sign in</h1>
        <form action={formAction}>
          <label htmlFor="username">
            <h2>Username</h2>
            <input type="text" placeholder="Username" name="username" />
            {state?.errors?.username?.map((error) => (
              <p>{error}</p>
            ))}
          </label>
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
