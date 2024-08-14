// src/CodeDisplay.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeDisplay = ({ code, language }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <SyntaxHighlighter language={language}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
