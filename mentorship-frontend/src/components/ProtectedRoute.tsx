import { JSX, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ReactNode } from 'react';

interface ProtectedProps {
  role: 'admin' | 'mentor' | 'mentee';
  children: ReactNode;
}

const ProtectedRoute = ({ role, children }: ProtectedProps): JSX.Element => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/login" replace />;
  if (user.role.toLowerCase() !== role) return <Navigate to="/unauthorized" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
