import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import { verifyUser } from "../utils/auth";
import classes from "../styles/Login.module.scss";

const inititalState = {
    username: "",
    password: "",
};

const Login = () => {
    const [userDetails, setUserDetails] = useState(inititalState);
    const { handleAlert, authSuccess, alert } = useContext(AppContext);

    const handleLogin = () => {
        let auth = verifyUser(userDetails.username, userDetails.password);
        handleAlert({ ...auth, status: true });
        if (auth?.status) {
            authSuccess();
        }
    };

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
            {alert?.status && <div className={classes.alert}>{alert?.message}</div>}
        </div>
    );
};

export default Login;