import React, { useState } from 'react'
import LoginBox from './components/LoginBox'
import SignInBox from './components/SignInBox'

const Login = () => {
  const [page, setPage] = useState("login")
  return (
    <>
      <main className="loginpage">
        {page === "login" && <LoginBox setPage={setPage} />}
        {page === "signin" && <SignInBox setPage={setPage} />}
      </main>
    </>
  );
}

export default Login