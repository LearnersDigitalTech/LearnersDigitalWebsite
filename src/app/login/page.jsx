"use client";

import { useState } from "react";
import { FaUser, FaEye, FaEyeSlash, FaQuestionCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1a3a] to-[#09203f] px-4" style={{ background: "#e3e8f1ff" }}>
      <div className="w-full max-w-md bg-[#101c3a] rounded-xl border border-[#1f355b] shadow-xl p-6">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-orange-400 text-xl">🔐</span>
          <h2 className="text-lg font-semibold text-white">Login</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Username */}
          <div>
            <label className="text-sm text-orange-300 font-medium">Email or Mobile number</label>
            <div className="relative mt-1">
              <input
                type="text"
                placeholder="Enter your Email or Mobile number"
                className="w-full bg-transparent border border-gray-500 rounded-lg px-10 py-2 text-white outline-none focus:border-blue-500 transition"
              />
              <FaUser className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-orange-300 font-medium">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full bg-transparent border border-gray-500 rounded-lg px-10 py-2 text-white outline-none focus:border-blue-500 transition"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-2">
            <div className="border-t border-gray-600 w-full"></div>
            <span className="text-gray-300 text-sm">OR</span>
            <div className="border-t border-gray-600 w-full"></div>
          </div>

          {/* Login With Google (Replaces Register Button) */}
          <button
            type="button"
            className="w-full bg-[#0d2a45] hover:bg-[#11365a] text-white border border-gray-600 py-2 rounded-lg flex items-center justify-center gap-3 transition"
          >
            <FcGoogle size={22} />
            Login with Google
          </button>

        </form>

        {/* Footer Section */}
        <div className="mt-4">
          <button className="w-full bg-white hover:bg-gray-200 text-gray-900 font-medium py-2 rounded-lg transition">
            Forgot Password?
          </button>

          
        </div>
      </div>
    </div>
  );
}