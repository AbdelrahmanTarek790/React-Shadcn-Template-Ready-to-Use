import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import routes from '@/routes/routes';

function Home() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to React Vite Template
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern React application template with shadcn UI, axios for API calls, and comprehensive error handling
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">shadcn UI</h2>
            <p className="text-gray-600 mb-4">Beautiful components built with Radix UI and Tailwind CSS</p>
            <Button variant="outline">Explore Components</Button>
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">API Integration</h2>
            <p className="text-gray-600 mb-4">Axios setup with interceptors for API requests</p>
            <Button variant="outline">View Documentation</Button>
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Error Handling</h2>
            <p className="text-gray-600 mb-4">Comprehensive error handling throughout the application</p>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        
        <div className="mt-12">
          <Link to={routes.public.about}>
            <Button>Learn More About the Project</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;