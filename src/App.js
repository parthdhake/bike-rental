import "./App.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import StickyBox from "react-sticky-box/dist/esnext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import bikeimage from "./assets/jawa.jpg";
import { useCallback, useState, useEffect } from "react";
import { MdMenu, MdElectricBike } from "react-icons/md";
import ReactLoading from "react-loading";

import { FaAngleDoubleUp, FaGithub, FaHome, FaQuestion } from "react-icons/fa";
import { GoPerson, GoSignIn, GoSignOut } from "react-icons/go";
import { Link, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "./features/userSlice";
import { setCollapseStatus } from "./features/sidebarSlice";
import Bikes from "./pages/Bikes";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BikeDetails from "./pages/BikeDetails";

const authroutes = [
  {
    path: "/login",
    exact: true,
    main: () => (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/signup",
    exact: true,
    main: () => (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
];

const routes = [
  {
    path: "/",
    exact: true,

    main: () => (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/bikes",
    exact: true,
    main: () => (
      <Layout>
        <Bikes />
      </Layout>
    ),
  },
  {
    path: "/bikes",
    main: () => (
      <Layout>
        <BikeDetails />
      </Layout>
    ),
  },
  {
    path: "/aboutus",
    exact: true,
    main: () => (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },
  {
    path: "/faq",
    exact: true,
    main: () => (
      <Layout>
        <Faq />
      </Layout>
    ),
  },
  {
    path: "/profile",
    exact: true,
    main: () => (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
];

function App() {
  const status = useSelector((state) => state.sidebar.collapseStatus);
  const dispatch = useDispatch();
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user);

  const verifyUser = useCallback(() => {
    fetch(
      "http://localhost:5000/refreshToken",
      { method: "POST", credentials: "include" } // could also try 'same-origin'
    )
      .then(async (response) => {
        if (response.status === 200) {
          const data = await response.json();

          let data1 = {
            name: user.name,
            token: data.token,
            userDetails: {},
          };
          dispatch(setUserDetails(data1));
          setisAuthenticated(true);
          setIsLoading(false);
        } else {
          let data1 = {
            name: "",
            token: "",
            userDetails: {},
          };
          dispatch(setUserDetails(data1));
          setisAuthenticated(false);
          setIsLoading(false);
        }
        // call refreshToken every 5 minutes to renew the authentication token.
        setTimeout(verifyUser, 5 * 60 * 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.name, dispatch]);

  useEffect(() => {
    verifyUser();
    if (user.token !== "") {
      setisAuthenticated(true);
      setIsLoading(false);
    }
  }, [verifyUser]);

  useEffect(() => {
    fetch("http://localhost:5000/me", {
      method: "GET",
      credentials: "include",
      // Pass authentication token as bearer token in header
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        console.log("🚀 ~ file: App.js ~ line 77 ~ useEffect ~ data", data);
        let data1 = {
          name: user.name,
          token: user.token,
          userDetails: data,
        };
        dispatch(setUserDetails(data1));
        // setUserContext(oldValues => {
        //   return { ...oldValues, details: data }
        // })
      } else {
        if (response.status === 401) {
          // Edge case: when the token has expired.
          // This could happen if the refreshToken calls have failed due to network error or
          // User has had the tab open from previous day and tries to click on the Fetch button
          // window.location.reload();
        } else {
          // setUserContext(oldValues => {
          //   return { ...oldValues, details: null }
          // })
        }
      }
    });
  }, [user.token]);
  const start_signOut = () => {
    fetch("http://localhost:5000/logout", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    }).then(async (response) => {
      // setUserContext(oldValues => {
      //   return { ...oldValues, details: undefined, token: null }
      // })
      console.log(response);

      let data1 = {
        name: "",
        token: "",
        // email: email,
      };

      dispatch(setUserDetails(data1));
      setisAuthenticated(false);

      window.localStorage.setItem("logout", Date.now());
    });
  };
  return (
    <>
      {isLoading ? (
        <ReactLoading
          id="loading"
          type="spin"
          color="#ffffff"
          height={100}
          width={100}
        />
      ) : (
        <Router>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {isAuthenticated ? (
              <StickyBox>
                <ProSidebar collapsed={status} style={{ height: "100vh" }}>
                  <SidebarHeader>
                    <Menu iconShape="square">
                      <MenuItem
                        icon={<MdMenu />}
                        onClick={() => {
                          dispatch(setCollapseStatus(!status));
                        }}
                      >
                        Bike Rental
                      </MenuItem>
                      <img
                        src={bikeimage}
                        alt="logo"
                        width="100%"
                        style={{
                          padding: "10px 0px",
                        }}
                      />
                    </Menu>
                  </SidebarHeader>
                  <Menu iconShape="square">
                    <MenuItem icon={<FaHome />}>
                      <Link to="/">Home</Link>
                    </MenuItem>
                    <MenuItem icon={<MdElectricBike />}>
                      <Link to="/bikes">Bikes</Link>
                    </MenuItem>
                    <MenuItem icon={<FaQuestion />}>
                      <Link to="/faq">FAQ</Link>
                    </MenuItem>
                    <MenuItem icon={<GoPerson />}>
                      <Link to="/profile">Profile</Link>
                    </MenuItem>
                    <MenuItem icon={<GoSignIn />}>
                      <Link to="/aboutus">About us</Link>
                    </MenuItem>
                  </Menu>
                  <SidebarFooter>
                    <Menu iconShape="square">
                      <MenuItem icon={<FaGithub />}>
                        <a href="https://github.com/PiyushIngale007/Multiplayer-Quiz/">
                          View Source
                        </a>
                      </MenuItem>
                    </Menu>
                    <Menu iconShape="square">
                      <MenuItem
                        icon={<GoSignOut />}
                        onClick={() => start_signOut()}
                      >
                        <Link to="/login">Sign Out</Link>
                      </MenuItem>
                    </Menu>
                  </SidebarFooter>
                </ProSidebar>
              </StickyBox>
            ) : null}
            <Switch>
              {/* {!isAuthenticated ? (
                authroutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))
              ) : (
                <Redirect to="/home" />
              )} */}

              {authroutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}

              {isAuthenticated ? (
                routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    auth={isAuthenticated}
                    children={<route.main />}
                  />
                ))
              ) : (
                <Redirect to="/login" />
              )}
            </Switch>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
