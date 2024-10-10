const Features = () => {
    return (
      <section
        id="features"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 px-6 py-16 relative z-10"
      >
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Discover the powerful features of WebOra that make website building fast, easy, and enjoyable.
          </p>
        </div>
  
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-10 md:space-y-0 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="flex items-start bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v8m4-4H8"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Intuitive Drag-and-Drop Editor
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Build your website effortlessly with our intuitive drag-and-drop editor that requires no coding skills.
              </p>
            </div>
          </div>
  
          {/* Feature 2 */}
          <div className="flex items-start bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.5l-8 7h16l-8-7zM12 19.5l8-7H4l8 7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Customizable Components
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Choose from a variety of customizable components, including forms and interactive elements, to create a unique experience.
              </p>
            </div>
          </div>
  
          {/* Feature 3 */}
          <div className="flex items-start bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v8m4-4H8"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Code Generation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Generate clean and reusable React JSX code that developers can use directly in their projects.
              </p>
            </div>
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-10 md:space-y-0 max-w-6xl mx-auto mt-12">
          {/* Feature 4 */}
          <div className="flex items-start bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Global State Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Manage global state easily across components to ensure a consistent and responsive experience.
              </p>
            </div>
          </div>
  
          {/* Feature 5 */}
          <div className="flex items-start bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M5 6h14M5 18h14"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Dynamic Navigation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Experience a dynamic navigation system that makes editing and updating your site easier than ever.
              </p>
            </div>
          </div>
  
          {/* Feature 6 */}
          <div className="flex items-start bg-white dark:bg-gray-700 shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9l5 5L16 4m0 0l-5 5m5-5h6v6m-6-6v6"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                Image Upload & Property Manipulation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Easily upload images and manipulate properties via sidebars for a more personalized touch.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  