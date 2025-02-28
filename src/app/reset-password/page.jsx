"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // For extracting token

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      setError("Invalid or expired reset link.");
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Password reset successful! Redirecting...");
      router.push("/sign-in");
    } else {
      setError(data.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row contBox text-white">
      {/* Left Section - Info */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-8 py-12">
        <h1 className="text-4xl font-bold text-[#A294F9]">Reset Your Password</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-md">
          Choose a new password to regain access to your account.
        </p>
      </div>

      {/* Right Section - Reset Password Form */}
      <div className="flex-1 flex justify-center items-center px-6 sm:px-12 lg:px-16 border-l max-md:border-none border-white/20">
        <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-center text-[#A294F9]">New Password</h2>
          <p className="text-gray-300 text-center mt-2">Enter your new password below</p>

          {error && <p className="text-red-500 text-center mt-2">{error}</p>}

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-300 text-sm sm:text-base">New Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#A294F9] outline-none"
                placeholder="Enter new password"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm sm:text-base">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mt-1 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#A294F9] outline-none"
                placeholder="Confirm new password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 bg-[#A294F9] text-black font-semibold rounded-md transition-all hover:bg-[#CDC1FF] sm:text-lg"
            >
              Reset Password
            </button>
          </form>

          <p className="text-gray-300 text-center mt-4 text-sm sm:text-base">
            Remembered your password?{" "}
            <a href="/sign-in" className="text-[#A294F9] hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;