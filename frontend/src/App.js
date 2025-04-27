import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Welcome from "./Pages/Welcome";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import PatientHistory from "./Pages/PatientHistory";
import Dashboard from "./Pages/Dashboard";
import SymptomTracker from "./Pages/SymptomTracker";
import Reminders from "./Pages/Reminders";
import MedTracker from "./Pages/MedTracker";
import GloveControls from "./Pages/GloveControls";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("authToken");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/patienthistory"
          element={
            <ProtectedRoute>
              <PatientHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/symptomtracker"
          element={
            <ProtectedRoute>
              <SymptomTracker />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reminders"
          element={
            <ProtectedRoute>
              <Reminders />
            </ProtectedRoute>
          } 
        />
         <Route
          path="/medtracker"
          element={
            <ProtectedRoute>
              <MedTracker />
            </ProtectedRoute>
          }
          
        />
          <Route
          path="/glovecontrols"
          element={
            <ProtectedRoute>
              <GloveControls />
            </ProtectedRoute>
          }
          
        />
      </Routes>
    </Router>
  );
}

export default App;
