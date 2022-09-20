import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialState = {
  status: false,
  message: null,
};

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [alert, setAlert] = useState(initialState);
  const [auth, setAuth] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [loginStatus, setLoginStatus] = useLocalStorage(
    "authentication",
    false
  );

  const handleAlert = (err) => {
    setAlert(err);
    setTimeout(() => {
      setAlert(null); // making alert disappear
    }, 5000);
  };

  const authSuccess = () => {
    setAuth(() => true);
    setLoginStatus(() => true);
  };

  const value = {
    handleAlert,
    alert,
    authSuccess,
    selectedDishes,
    setSelectedDishes,
    auth,
    loginStatus,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
