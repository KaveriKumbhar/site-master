import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 px-6 py-16"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-10">
          About <span className="text-blue-600 dark:text-yellow-400">Webora</span>
        </h2>
        <div className="space-y-8">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Webora is a modern drag-and-drop website builder that simplifies the creation and management of websites. It's designed for both non-developers and developers, offering a powerful toolkit without the need for coding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Customizable Components</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build forms, interactive elements, and more using pre-designed components, tailored to your project needs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">React JSX Code Generation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Export clean React JSX code to streamline your development process and get the most out of your website’s functionality.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Dynamic Content Management</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your content with seamless database integration, making Webora ideal for dynamic websites.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Intuitive Drag-and-Drop Editor</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create and design websites quickly and efficiently without any coding knowledge, all within an intuitive editor.
              </p>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
            Whether you’re starting from scratch or refining an existing site, Webora empowers you to build professional websites quickly and effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
