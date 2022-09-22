import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useContext } from "react";
import { AppContext } from "./context/AppContextProvider";
import classes from "./styles/Login.module.scss";

const App = () => {
  const { alert } = useContext(AppContext);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
      {alert?.status && (
        <div className={classes.alert}>
          <div>{alert?.message}</div>
        </div>
      )}
    </div>
  );
};

export default App;
