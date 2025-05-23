import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import routes from './routes';

/**
 * Component to protect routes that require authentication
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    // Save the location the user was trying to go to for redirecting after login
    return <Navigate to={routes.public.login} state={{ from: location.pathname }} replace />;
  }

  // If authenticated, show the protected content
  return children;
}

export default ProtectedRoute;