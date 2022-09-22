import React, { createContext, useState } from "react";
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
  const [loginStatus, setLoginStatus] = useLocalStorage("authentication", {
    status: false,
    user: null,
  });

  const handleAlert = (err) => {
    setAlert(err);
    setTimeout(() => {
      setAlert(null); // making alert disappear
    }, 3000);
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
    setLoginStatus,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
