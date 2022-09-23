import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContextProvider";
import { verifyUser } from "../utils/auth";
import classes from "../styles/Login.module.scss";
import { useNavigate } from "react-router-dom";

const inititalState = {
  username: "",
  password: "",
};

const Login = () => {
  const [userDetails, setUserDetails] = useState(inititalState);
  const { handleAlert, authSuccess, loginStatus, setLoginStatus } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    let auth = verifyUser(userDetails.username, userDetails.password);
    if (!auth.status) {
      handleAlert({ ...auth, status: true });
    }
    if (auth?.status) {
      authSuccess();
      navigate("/dashboard");
      setLoginStatus({ user: userDetails.username, status: auth.status });
    }
  };

  useEffect(() => {
    if (loginStatus.status) {
      navigate("/dashboard");
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const data = {
      ...userDetails,
      [name]: value,
    };
    setUserDetails(data);
  };

  return (
    <div className={classes.main}>
      <div className={classes.login}>
        <h2>Login</h2>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button
          disabled={!userDetails?.username || !userDetails?.password}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
