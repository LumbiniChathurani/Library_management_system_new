import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

function Register() {
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
        {/* Left side - Register form */}
        <div className="w-full md:w-1/2 max-w-md p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white">
            Create Account
          </h1>
          <p className="mb-8 text-center text-gray-500 dark:text-gray-400">
            Join the FECT Library system today
          </p>

          <form className="space-y-5">
            {/* Full Name */}
            <div
              className="flex items-center px-4 py-2 border rounded-lg 
                            bg-white dark:bg-slate-800 
                            text-gray-900 dark:text-gray-100 
                            focus-within:ring-2 focus-within:ring-cyan-400"
            >
              <FaUser className="text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div
              className="flex items-center px-4 py-2 border rounded-lg 
                            bg-white dark:bg-slate-800 
                            text-gray-900 dark:text-gray-100 
                            focus-within:ring-2 focus-within:ring-cyan-400"
            >
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Email"
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

            {/* Confirm Password */}
            <div
              className="flex items-center px-4 py-2 border rounded-lg 
                            bg-white dark:bg-slate-800 
                            text-gray-900 dark:text-gray-100 
                            focus-within:ring-2 focus-within:ring-cyan-400"
            >
              <FaLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-transparent focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
              />
            </div>

            {/* Register button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg font-medium text-white 
                         bg-gradient-to-r from-cyan-400 to-blue-500 
                         dark:from-cyan-600 dark:to-blue-700
                         hover:scale-[1.02] transition-transform duration-200"
            >
              Register
            </button>
          </form>

          {/* Login link */}
          <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-300">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>

        {/* Right side - Image (hidden on small screens) */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://i.pinimg.com/736x/58/8a/b8/588ab86764b19cda3843077aa8921786.jpg"
            alt="Library"
            className="w-full max-h-[520px] object-cover 
               filter brightness-95 dark:brightness-75 dark:contrast-125 
               transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
