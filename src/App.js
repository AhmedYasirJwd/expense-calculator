import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddMoney from './pages/AddMoney';
import DetectMoney from './pages/DetectMoney';
import Home from './pages/Home'; // Assuming you have a home page
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddMoney" element={<AddMoney />} />
        <Route path="/DetectMoney" element={<DetectMoney />} />
      </Routes>
    </Router>
  );
};

export default App;
