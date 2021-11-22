import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import '../../assets/css/Login.css'

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogIn,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = useAuth()

  return (
    <>
      <section className="login">
        <div className="loginContainer">
          <label htmlFor="" className="authLabel">
            UserName
          </label>
          <input
            type="text"
            className="authInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
          <p className="errorMsg">{emailError}</p>
          <label htmlFor="" className="authLabel">
            Password
          </label>
          <input
            type="password"
            className="authInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoFocus
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="authButton" onClick={handleLogIn}>
                  Sign In
                </button>
                <p className="authP">
                  Don't have an account?{' '}
                  <span
                    className="authSpan"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className="authButton" onClick={handleSignUp}>
                  Sign Up
                </button>
                <p className="authP">
                  Have an account?{' '}
                  <span
                    className="authSpan"
                    onClick={() => {
                      console.log(1)
                      setHasAccount(!hasAccount)
                    }}
                  >
                    Sign In
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
