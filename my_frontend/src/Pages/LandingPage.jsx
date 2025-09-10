import React, { useState, useEffect } from "react";
import { IoLibrary } from "react-icons/io5";
import { Link } from "react-router-dom";

function LandingPage() {
  // Set darkMode as default
  const [darkMode, setDarkMode] = useState(true);

  // Apply or remove 'dark' class on <html> when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white dark:bg-slate-800">
        <div className="flex items-center gap-2 text-xl font-bold">
          <IoLibrary className="text-cyan-500 text-2xl" />
          <span>FECT Library</span>
        </div>

        {/* Light/Dark Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6 py-16">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-cyan-500">FECT Library</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-8">
          Manage books, track borrowings, and streamline your library operations
          with ease.
        </p>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-6 py-3 rounded-lg text-white font-medium 
                       bg-gradient-to-r from-cyan-400 to-blue-500 
                       hover:from-cyan-500 hover:to-blue-600 
                       dark:from-cyan-600 dark:to-blue-700 
                       dark:hover:from-cyan-500 dark:hover:to-blue-600 
                       shadow-md transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 rounded-lg font-medium border border-cyan-500 text-cyan-500 
                       hover:bg-cyan-50 dark:hover:bg-slate-800 transition"
          >
            Register
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} FECT Library. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
