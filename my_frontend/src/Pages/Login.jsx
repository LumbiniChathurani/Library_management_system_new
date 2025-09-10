import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center 
                 bg-gradient-to-br from-cyan-400 to-blue-500 
                 dark:from-slate-800 dark:to-slate-900 
                 transition-colors duration-500 p-4"
    >
      <div
        className="flex w-full max-w-4xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl 
                      rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Left side - Login form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white">
            Welcome Back
          </h1>
          <p className="mb-8 text-center text-gray-500 dark:text-gray-400">
            Please login to continue
          </p>

          <form className="space-y-5">
            {/* Username */}
            <div
              className="flex items-center px-4 py-2 border rounded-lg 
                            bg-white dark:bg-slate-800 
                            text-gray-900 dark:text-gray-100 
                            focus-within:ring-2 focus-within:ring-cyan-400"
            >
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-transparent focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>

            {/* Password */}
            <div
              className="flex items-center px-4 py-2 border rounded-lg 
                            bg-white dark:bg-slate-800 
                            text-gray-900 dark:text-gray-100 
                            focus-within:ring-2 focus-within:ring-cyan-400"
            >
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <input
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 dark:border-gray-600 text-cyan-500 focus:ring-cyan-400"
                />
                Remember me
              </label>
              <button className="text-sm text-cyan-500 hover:underline">
                Forgot password?
              </button>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg font-medium text-white 
                         bg-gradient-to-r from-cyan-400 to-blue-500 
                         dark:from-cyan-600 dark:to-blue-700
                         hover:scale-[1.02] transition-transform duration-200"
            >
              Login
            </button>
          </form>

          {/* Register link */}
          <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-300">
            Don’t have an account?{" "}
            <Link to="/register" className="text-cyan-500 hover:underline">
              Register
            </Link>
          </p>
        </div>

        {/* Right side - Image (hidden on small screens) */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://img.freepik.com/premium-photo/library-is-full-books-night-without-people-anime-style_931086-2235.jpg"
            alt="Library"
            className="w-full h-full object-cover 
                       filter brightness-95 dark:brightness-75 dark:contrast-125 
                       transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
