function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About This Template</h1>
      <p className="mb-4 text-gray-700">
        This React template was created using Vite and provides a solid foundation for building modern web applications. It includes:
      </p>
      
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>React with Vite for fast development and optimized builds</li>
        <li>shadcn UI components for beautiful, accessible UI</li>
        <li>Axios integration with interceptors for API requests</li>
        <li>Comprehensive error handling with error boundaries</li>
        <li>React Router for navigation with protected routes</li>
        <li>Toast notifications for user feedback</li>
        <li>Authentication system with protected routes</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
      <p className="mb-4 text-gray-700">
        To get started with this template, you can:
      </p>
      
      <ul className="list-decimal list-inside mb-6 space-y-2 text-gray-700">
        <li>Clone the repository</li>
        <li>Install dependencies with <code className="bg-gray-100 px-2 py-1 rounded">npm install</code></li>
        <li>Start the development server with <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code></li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Project Structure</h2>
      <p className="mb-4 text-gray-700">
        The project follows a modular structure to keep code organized:
      </p>
      
      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm mb-6">
{`├── public/             # Static files
├── src/                # Source code
│   ├── assets/         # Images and assets
│   ├── components/     # Reusable components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   ├── routes/         # Routing configuration
│   ├── services/       # API services
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Application entry point
└── package.json        # Project dependencies`}
      </pre>
    </div>
  );
}

export default About;