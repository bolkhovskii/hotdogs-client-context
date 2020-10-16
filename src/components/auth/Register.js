import React, { useState, useCallback } from "react";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";

export const Register = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async (event) => {
    event.preventDefault();
    axios.post("api/auth/signup", form).catch((e) => console.log(e));
    history.push("/login");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Create new account</h5>
              <form className="form-signin">
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputUser"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    onChange={changeHandler}
                    required
                    autofocus
                  />
                  <label htmlFor="inputUser">Username</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    name="email"
                    onChange={changeHandler}
                    required
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={changeHandler}
                    required
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                  onClick={registerHandler}
                >
                  Sign in
                </button>
                <NavLink
                  className="btn btn-lg btn-secondary btn-block text-uppercase"
                  type="login"
                  to="/login"
                >
                  Sign out
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
