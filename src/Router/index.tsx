import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'Pages/Home';
import Erro404 from 'Pages/Erro404';
import Dashboard from 'Pages/Dashboard';
import PrivateRoute from './Private';
import { isAuthenticated } from 'Utils/auth';

const About: React.FC = (): JSX.Element => {
  return <h1>sdkflsnkfnskfnskldn</h1>;
};

const Login: React.FC = (): JSX.Element => {
  return <h1>Não Auth</h1>;
};

const RouterApp: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Dashboard />} path="/user/:id" />
        <Route element={<Erro404 />} path="*" />
        <Route
          path="/login"
          element={
            <PrivateRoute
              isAuthenticated={!isAuthenticated()}
              Component={<Login />}
              isAuthenticatedPatch="/"
            />
          }
        />
        <Route
          path="/nested"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated()}
              Component={<About />}
              isAuthenticatedPatch="/login"
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterApp;
