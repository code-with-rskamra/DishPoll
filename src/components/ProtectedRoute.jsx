import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

const ProtectedRoute = () => {
  const { loginStatus } = useContext(AppContext);
  return loginStatus ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
