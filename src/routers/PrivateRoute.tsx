// src/routers/PrivateRoute.tsx

import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useProfiler } from '../contexts/ProfilerContext';

interface PrivateRouteProps {
  roles?: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ roles }) => {
  const { isAuthenticated, auth } = useProfiler();
  const location = useLocation();

  const hasRole =
    roles && roles.length > 0
      ? roles.some((role) => auth?.token?.realm_access?.roles.includes(role))
      : true;

  if (!isAuthenticated) {
    console.log('User is not authenticated. Redirecting to /401');
    console.log(auth);
    return <Navigate to="/401" state={{ from: location }} replace />;
  }

  if (!hasRole) {
    return <Navigate to="/403" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
