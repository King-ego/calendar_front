import React from 'react';
import { Navigate } from 'react-router-dom';
import * as Interface from 'Common/Interfaces';

const PrivateRoute: React.FC<Interface.ProtectedRouteProps> = ({
  Component,
  isAuthenticated,
  isAuthenticatedPatch,
}): JSX.Element | null => {
  if (isAuthenticated) {
    return Component;
  } else {
    return <Navigate to={isAuthenticatedPatch} />;
  }
};

export default PrivateRoute;
