import React, { useState } from "react";
import "./css/login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../features/userSlice";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const dispatch = useDispatch();
  const [signedUp, setsignedUp] = useState(false);
  const user = useSelector((state) => state.user);
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const start_signup = () => {
    if (email !== "" && password !== "" && Name !== "" && UserName !== "") {
      setIsSubmitting(true);
      setError("");
      const genericErrorMessage =
        "Something went wrong! Please try again later.";
      let data = {
        username: UserName,
        password: password,
        name: Name,
        email: email,
      };
      axios
        .post("http://localhost:5000/signup", data, {
          withCredentials: true,
        })
        .then(async (response) => {
          setIsSubmitting(false);
          if (response.status !== 200) {
            if (response.status === 400) {
              setError("Please fill all the fields correctly!");
            } else if (response.status === 401) {
              setError("Invalid email and password combination.");
            } else if (response.status === 500) {
              console.log(response);
              const data = response;
              if (data.message) setError(data.message || genericErrorMessage);
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

            setsignedUp(true);
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

  if (signedUp) {
    return <Redirect push to="/" />;
  }
  return (
    <>
      <section class="login">
        <div class="login_box">
          <div class="left">
            <div class="contact">
              <form style={{ textAlign: "center" }}>
                <h3>SIGN UP</h3>
                <input
                  type="name"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  value={Name}
                />
                <input
                  type="Username"
                  id="Username"
                  className="form-control"
                  placeholder="User Name"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                  value={UserName}
                />
                <input
                  type="email"
                  id="usr"
                  className="form-control"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                />
                <input
                  type="password"
                  id="pass"
                  className="form-control"
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                />

                <button
                  onClick={() => start_signup()}
                  class="submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  LET'S GO
                </button>
                <p style={{ color: "black" }}>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
                {error && (
                  <p style={{ color: "red" }}>
                    {error} Or username already taken
                  </p>
                )}
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
