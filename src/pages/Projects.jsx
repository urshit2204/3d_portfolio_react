// src/Project.js
import React from 'react';
import CodeDisplay from '../CodeDisplay';

const Project = () => {
  const codeSnippet = `
  import React from 'react';

  const App = () => {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
      </div>
    );
  };

  export default App;
  `;

  return (
    <div className="text-white min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold flex justify-center items-center mb-4">My Project</h1>
        <p className="mb-4">
          This is a description of the project. It explains the purpose, features, and technology stack used in this project.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-white">Code Example</h2>
        <CodeDisplay code={codeSnippet} language="javascript" />
      </div>
    </div>
  );
};

export default Project;
