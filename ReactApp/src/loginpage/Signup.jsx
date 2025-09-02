import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created ✅");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-100">
      <div className="w-full max-w-3xl bg-white rounded-md shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-teal-700 text-white text-center py-6">
          <h2 className="text-xl font-semibold">Create new Account</h2>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold text-gray-600 mb-2"
            >
              NAME
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              required
              className="w-full border-b-2 border-gray-300 focus:border-teal-700 focus:outline-none py-2 px-1 text-sm"
            />
          </div>

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-xs font-bold text-gray-600 mb-2"
            >
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              required
              className="w-full border-b-2 border-gray-300 focus:border-teal-700 focus:outline-none py-2 px-1 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold text-gray-600 mb-2"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              required
              className="w-full border-b-2 border-gray-300 focus:border-teal-700 focus:outline-none py-2 px-1 text-sm"
            />
          </div>

          {/* Phone with Country Code */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold text-gray-600 mb-2"
            >
              PHONE NO.
            </label>
            <div className="flex gap-2">
              <select
                id="countryCode"
                className="border-b-2 border-gray-300 focus:border-teal-700 focus:outline-none py-2 px-1 text-sm"
                defaultValue="+91"
                required
              >
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (IN)</option>
                <option value="+61">+61 (AUS)</option>
                <option value="+81">+81 (JP)</option>
              </select>
              <input
                type="tel"
                id="phone"
                placeholder="Enter phone number"
                required
                className="flex-1 border-b-2 border-gray-300 focus:border-teal-700 focus:outline-none py-2 px-1 text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-bold text-gray-600 mb-2"
            >
              NEW PASSWORD
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                required
                className="w-full border-b-2 border-gray-300 focus:border-teal-700 focus:outline-none py-2 px-1 text-sm"
              />
              <span
                className="absolute right-2 top-2 cursor-pointer text-lg"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-xs font-bold text-gray-600 mb-2"
            >
              CONFIRM NEW PASSWORD
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                placeholder="Confirm password"
                required
                className="w-full border-b-2 border-gray-300 focus:border-teal-700 focus:outline-none py-2 px-1 text-sm"
              />
              <span
                className="absolute right-2 top-2 cursor-pointer text-lg"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Signup Button */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-4 space-y-2">
            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-6 rounded-md transition"
            >
              SIGN UP
            </button>

            {/* Login Link */}
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-teal-700 font-semibold hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
