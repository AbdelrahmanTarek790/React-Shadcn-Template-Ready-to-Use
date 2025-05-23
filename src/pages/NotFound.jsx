import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import routes from '@/routes/routes';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to={routes.public.home}>
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;