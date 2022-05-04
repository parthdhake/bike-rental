import React, { useState } from "react";
import "./css/login.css";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../features/userSlice";
import axios from "axios";

export default function Login() {
  const dispatch = useDispatch();
  const [loggedIn, setloggedIn] = React.useState(false);
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const start_login = (e) => {
    e.preventDefault();

    if (password !== "" && UserName !== "") {
      setIsSubmitting(true);
      setError("");
      const genericErrorMessage =
        "Something went wrong! Please try again later.";
      let data = {
        username: UserName,
        password: password,
      };
      axios
        .post("http://localhost:5000/login", data, {
          withCredentials: true,
        })
        .then(async (response) => {
          setIsSubmitting(false);
          if (response.status !== 200) {
            if (response.status === 400) {
              setError("Please fill all the fields correctly!");
            } else if (response.status === 401) {
              setError("Invalid email and password combination.");
            } else {
              setError(genericErrorMessage);
            }
          } else {
            const { data } = response;

            let data1 = {
              name: UserName,
              token: data.token,
              userDetails: {},
              // email: email,
            };

            dispatch(setUserDetails(data1));

            setloggedIn(true);
          }
        })
        .catch((error) => {
          setIsSubmitting(false);
          setError(genericErrorMessage);
        });
    } else {
      alert("Please fill All details");
    }
  };

  if (loggedIn) {
    return <Redirect push to="/" />;
  }
  return (
    <>
      <section class="login">
        <div class="login_box">
          <div class="left">
            <div class="contact">
              <form onSubmit={start_login} style={{ textAlign: "center" }}>
                <h3>SIGN IN</h3>
                <input
                  type="Username"
                  id="Username"
                  className="form-control"
                  placeholder="USERNAME"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                  value={UserName}
                />
                <input
                  type="password"
                  id="pass"
                  className="form-control"
                  placeholder="PASSWORD"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                />
                <button class="submit" disabled={isSubmitting} type="submit">
                  LET'S GO
                </button>
                <p style={{ color: "black" }}>
                  Don't have an account yet? <Link to="/signup">Register</Link>
                </p>
              </form>
            </div>
          </div>
          <div class="right">
            <div class="right-text">
              <h2>LONYX</h2>
              <h5>A BIKE RENTAL AGENCEY</h5>
            </div>
            {/* <div class="right-inductor">
              <img
                src="https://s3-us-west-2.amazonaws.com/lonyx-assets/lonyx-logo.png"
                alt=""
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
