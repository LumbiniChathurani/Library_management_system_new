import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

function Topbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="fixed top-0 left-20 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6 shadow-sm z-10">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        Library System
      </h1>

      <div className="flex items-center space-x-6">
        <FaBell
          className="text-gray-600 dark:text-gray-300 cursor-pointer"
          size={20}
        />

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <FaSun className="text-yellow-400" size={20} />
          ) : (
            <FaMoon className="text-gray-600 dark:text-gray-300" size={20} />
          )}
        </button>

        <a href="/profile">
          <img
            src="https://via.placeholder.com/40"
            alt="Admin"
            className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600"
          />
        </a>
      </div>
    </header>
  );
}

export default Topbar;
