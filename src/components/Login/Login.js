import React from "react";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePassChange,
    handleRegi,
    error,
    handleToggle,
    isLoggedIn,
  } = useAuth();

  return (
    <div className=" p-5 ">
      <div className=" login-container p-5 container">
        {" "}
        <h2 className=" py-5 text-white">
          Please {isLoggedIn ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleRegi}>
          <div className="row mb-3">
            <div className="col-sm-10">
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10">
              <input
                onBlur={handlePassChange}
                placeholder="Password"
                type="password"
                className=" form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  onChange={handleToggle}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label
                  className="fs-6s
                text-white  form-check-label"
                  htmlFor="gridCheck1"
                >
                  Already Registered
                </label>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-danger">{error}</h5>
          </div>
          <button type="submit" className=" btn btn-primary">
            {isLoggedIn ? "Login" : "Register"}
          </button>
        </form>{" "}
        <br />
        <div>
          <button
            className="g-btn"
            onClick={signInUsingGoogle}
            classNamebtn
            btn-primary
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
