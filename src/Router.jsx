import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/SignUp";
import TestPage from "./pages/TestPage";
import TestResult from "./pages/TestResult";
import ProtectedRoute from "./components/ProtectedRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/results" element={<TestResult />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
