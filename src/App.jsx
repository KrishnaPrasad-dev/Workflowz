import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import AllTask from "./components/other/AllTask";
import EmployeeDetails from "./components/other/EmployeeDetails";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);

      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <Router>
      <Routes>
        {/* Default login route */}
        {!user && <Route path="/" element={<Login handleLogin={handleLogin} />} />}

        {/* Admin route */}
        {user === "admin" && (
          <Route
            path="/"
            element={<AdminDashboard changeUser={setUser} />}
          />
        )}

        {/* Employee route */}
        {user === "employee" && (
          <Route
            path="/"
            element={
              <EmployeeDashboard
                changeUser={setUser}
                data={loggedInUserData}
              />
            }
          />
        )}

        {/* Task-related routes */}
        <Route path="/tasks" element={<AllTask />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />

        {/* Fallback route */}
        <Route
          path="*"
          element={<div className="text-center mt-10">Page Not Found</div>}
        />
      </Routes>
    </Router>
  );
};

export default App;
