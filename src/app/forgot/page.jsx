"use client";

import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to", email);
  };

  return (
    <div className="flex flex-col lg:flex-row contBox text-white">
      {/* Left Section - Info */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 py-8">
        <h1 className="text-4xl font-bold text-[#A294F9]">Forgot Your Password?</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-md">
          No worries! Enter your email, and we'll send you a link to reset your password.
        </p>
      </div>

      {/* Right Section - Forgot Password Form */}
      <div className="flex-1 flex justify-center items-center px-6 sm:px-12 lg:px-16 border-l max-md:border-none border-white/20">
        <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-center text-[#A294F9]">Reset Password</h2>
          <p className="text-gray-300 text-center mt-2">Enter your email to get a reset link</p>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label className="block text-gray-300 text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#A294F9] outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full mt-4 py-3 bg-[#A294F9] text-black font-semibold rounded-md transition-all hover:bg-[#CDC1FF] sm:text-lg"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back to Sign In */}
          <p className="text-gray-300 text-center mt-4 text-sm sm:text-base">
            Remember your password?{" "}
            <a href="/sign-in" className="text-[#A294F9] hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;