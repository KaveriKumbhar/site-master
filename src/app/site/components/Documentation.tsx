import React from 'react';

const Documentation: React.FC = () => {
  return (
    <section
      id="documentation"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 px-6 py-16 relative z-10"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-12">
          Webora Documentation
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Section 1: Customizable Components */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600 dark:text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7h4v4H3V7zm0 6h4v4H3v-4zm6 0h4v4h-4v-4zm0-6h4v4h-4V7zm6 0h4v4h-4V7zm0 6h4v4h-4v-4z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-yellow-400">
              Customizable Components
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Learn how to use Webora's wide range of pre-built components, including forms and interactive elements, to speed up your development process.
            </p>
            <a
              href="#customizable-components"
              className="inline-block mt-4 text-blue-500 dark:text-yellow-400 hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* Section 2: React JSX Code Generation */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600 dark:text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7v10M12 7v10M8 7v10m10-12V5H6v2M4 7h16"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-yellow-400">
              React JSX Code Generation
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Get insights on how Webora allows you to export clean, production-ready React JSX code for developers.
            </p>
            <a
              href="#jsx-code-generation"
              className="inline-block mt-4 text-blue-500 dark:text-yellow-400 hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* Section 3: Dynamic Content Management */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600 dark:text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0 2c-1.103 0-2 .897-2 2v5h4v-5c0-1.103-.897-2-2-2zm7 3a1 1 0 00-1-1h-2v2h2a1 1 0 011 1v2h-2v2h2a1 1 0 011 1v2h-4v-4H8v4H4v-2h2v-2H4v-2h2v-2a1 1 0 011-1h2v-2H7a1 1 0 00-1 1v3H4v2h16v-2h-3v-3z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-yellow-400">
              Dynamic Content Management
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Discover how to integrate Webora with databases to manage and update dynamic content with ease.
            </p>
            <a
              href="#dynamic-content-management"
              className="inline-block mt-4 text-blue-500 dark:text-yellow-400 hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* Section 4: Drag-and-Drop Editor */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600 dark:text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4h16v16H4V4zm7 10h2v4h-2v-4zm0-8h2v4h-2V6z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-yellow-400">
              Intuitive Drag-and-Drop Editor
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Master Webora's intuitive drag-and-drop editor, allowing users to build websites without writing any code.
            </p>
            <a
              href="#drag-drop-editor"
              className="inline-block mt-4 text-blue-500 dark:text-yellow-400 hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* Section 5: Global State Management */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600 dark:text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 12v10m8-10v10m4-10V2H0v20h16v-4m0-4v-4h8V2H0v10h8z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-yellow-400">
              Global State Management
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Explore how Webora manages global state seamlessly across components, ensuring consistency in user experience.
            </p>
            <a
              href="#global-state-management"
              className="inline-block mt-4 text-blue-500 dark:text-yellow-400 hover:underline"
            >
              Learn More →
            </a>
          </div>

          {/* Section 6: Deployment & Performance */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600 dark:text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h1m0-4h-1v-1a2 2 0 014 0v4h-1m1 6h1v4h-1v-4z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-yellow-400">
              Deployment & Performance
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Get tips on how to deploy your Webora projects efficiently, while optimizing for performance and security.
            </p>
            <a
              href="#deployment-performance"
              className="inline-block mt-4 text-blue-500 dark:text-yellow-400 hover:underline"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
