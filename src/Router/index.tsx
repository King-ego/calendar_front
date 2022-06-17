import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home';
import Erro404 from 'Pages/Erro404';
import Dashboard from 'Pages/Dashboard';

const RouterApp: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Dashboard />} path="/user/:id" />
        <Route element={<Erro404 />} path="*" />
      </Routes>
    </Router>
  );
};

export default RouterApp;
