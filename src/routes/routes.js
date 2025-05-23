/**
 * Application routes configuration
 * This file centralizes all route definitions
 */

const routes = {
  // Public routes
  public: {
    home: '/',
    about: '/about',
    login: '/login',
  },
  
  // Protected routes (require authentication)
  protected: {
    dashboard: '/dashboard',
    profile: '/profile',
    settings: '/settings',
  }
};

export default routes;