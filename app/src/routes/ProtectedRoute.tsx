import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ActivityIndicator } from 'react-native';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <ActivityIndicator size='large' color='#0000ff' />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
