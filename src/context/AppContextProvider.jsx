import React, { createContext, useState } from "react";

const initialState = {
  status: false,
  message: null,
};

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  const [alert, setAlert] = useState(initialState);
  const [auth, setAuth] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);

  const handleAlert = (err) => {
    setAlert(err);
    setTimeout(() => {
      setAlert(null);               // making alert disappear
    }, 5000);
  };

  const authSuccess = () => {
    setAuth(true);
  };

  const value = {
    handleAlert,
    alert,
    authSuccess,
    selectedDishes,
    setSelectedDishes,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
