import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="bg-gray-900 p-20 rounded-lg shadow-lg max-w-lg w-full">
        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white text-base font-bold mb-2" htmlFor="name">
                  Name :
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-base font-bold mb-2" htmlFor="email">
                  EmailId :
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Your EmailId"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-base font-bold mb-2" htmlFor="message">
                  Message :
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write a Messege"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-blue-500 hover:text-black transition"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Thank You!</h2>
            <p className="text-white">Thank you for messaging me. I will get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
