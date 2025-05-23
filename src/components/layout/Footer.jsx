import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} React Vite Template. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-700">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-700">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;