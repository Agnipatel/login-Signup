import React, { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login submitted ✅");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-md shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-teal-700 text-white text-center py-6">
          <h2 className="text-2xl md:text-3xl font-bold">Login</h2>
          <p className="text-sm md:text-base mt-1 opacity-90">
            Sign in to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          {/* Username */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-xs font-bold text-teal-700 mb-2"
            >
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              required
              className="w-full border-b-2 border-teal-700 focus:outline-none py-2 px-1 text-sm"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-xs font-bold text-teal-700 mb-2"
            >
              NEW PASSWORD
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                required
                className="w-full border-b-2 border-teal-700 focus:outline-none py-2 px-1 text-sm"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-lg"
                onClick={togglePassword}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 rounded-md transition"
          >
            LOGIN
          </button>
        </form>

        {/* Signup link */}
        <p className="text-center text-xs sm:text-sm pb-6">
          Don’t have an Account?{" "}
          <a
            href="/signup"
            className="text-teal-700 font-semibold hover:underline"
          >
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
}
