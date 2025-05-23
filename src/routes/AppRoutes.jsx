import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import ProtectedRoute from './ProtectedRoute';

// Layout
import Layout from '@/components/layout/Layout';

// Public Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';

// Protected Pages
import Dashboard from '@/pages/Dashboard';

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes with layout */}
      <Route element={<Layout />}>
        <Route path={routes.public.home} element={<Home />} />
        <Route path={routes.public.about} element={<About />} />
        
        {/* Auth routes without main layout */}
        <Route path={routes.public.login} element={<Login />} />
        
        {/* Protected routes */}
        <Route 
          path={routes.protected.dashboard} 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Redirect from old routes (example) */}
        <Route path="/old-page" element={<Navigate to={routes.public.home} replace />} />
        
        {/* 404 not found page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;