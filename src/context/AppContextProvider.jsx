import React, { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";

const initialState = {
  status: false,
  message: null,
};

const DISHES_URL = process.env.REACT_APP_DISHES_API;

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [alert, setAlert] = useState(initialState);
  const [auth, setAuth] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [loginStatus, setLoginStatus] = useLocalStorage("authentication", {
    status: false,
    user: null,
  });

  useEffect(() => {
    const getDishes = async () => {
      const response = await axios.get(DISHES_URL);
      setDishes(response.data);
    };
    getDishes();
  }, []);

  const handleAlert = (err) => {
    setAlert(err);
    setTimeout(() => {
      setAlert(null); // making alert disappear
    }, 3000);
  };

  const handleLogout = () => {
    setAuth(false);
    setLoginStatus({ status: false });
  };

  const authSuccess = () => {
    setAuth(() => true);
    setLoginStatus({ ...loginStatus, status: true });
  };

  const value = {
    handleAlert,
    alert,
    authSuccess,
    selectedDishes,
    setSelectedDishes,
    auth,
    loginStatus,
    dishes,
    handleLogout,
    setLoginStatus,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
