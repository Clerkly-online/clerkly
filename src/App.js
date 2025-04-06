import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Signup from "./pages/Signup_TMP";
import Login from "./pages/Login_TMP";
import Dashboard from "./pages/Dashboard_TMP";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // false zum Testen

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
