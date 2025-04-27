

import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';
import PatientHistory from './Pages/PatientHistory';
import Dashboard from './Pages/Dashboard';
import SymptomTracker from './Pages/SymptomTracker';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PatientHistory" element={<PatientHistory />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/SymptomTracker" element={<SymptomTracker />} />
      </Routes>
  );
}

export default App;