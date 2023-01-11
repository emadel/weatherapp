import React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'normalize.css';

import { Dashboard } from './pages/Dashboard';
import { LocationDetails } from './pages/LocationDetails';

function App() {
  return (
    <Routes>
      <Route element={<Dashboard />} path="/" />

      <Route element={<LocationDetails />} path="/location" />
    </Routes>
  );
}

export default App;
