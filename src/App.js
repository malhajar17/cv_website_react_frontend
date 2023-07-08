import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Logo from './assets/images.png';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App;
