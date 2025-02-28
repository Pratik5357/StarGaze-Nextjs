"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Signing in with", form);
    const res = await signIn('credentials', {
      redirect: false,
      email: form.email,
      password: form.password,
  });
  console.log('SignIn response:', res);

        if (res.error) {
            setError(res.error);
        } else {
            setError('');
            router.push('/'); // Redirect to dashboard or any other page
        }
  };

  return (
    <div className="flex flex-col lg:flex-row contBox text-white">
      {/* Left Section - Info */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-8 py-12">
        <h1 className="text-4xl font-bold text-[#A294F9]">Welcome Back</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-md">
          Sign in to Stargaze and continue your journey through the universe.  
          Discover stunning space images and explore the cosmos.
        </p>
      </div>

      {/* Right Section - Sign In Form */}
      <div className="flex-1 flex justify-center items-center px-6 sm:px-12 lg:px-16 border-l max-md:border-none border-white/20">
        <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-center text-[#A294F9]">Sign In</h2>
          <p className="text-gray-300 text-center mt-2">Welcome back to Stargaze!</p>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label className="block text-gray-300 text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#A294F9] outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-300 text-sm sm:text-base">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#A294F9] outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full mt-4 py-3 bg-[#A294F9] text-black font-semibold rounded-md transition-all hover:bg-[#CDC1FF] sm:text-lg"
            >
              Sign In
            </button>
          </form>

          {/* Forgot Password */}
          <p className="text-gray-300 text-center mt-3 text-sm sm:text-base">
            <a href="/forgot" className="text-[#A294F9] hover:underline">
              Forgot Password?
            </a>
          </p>

          {/* Sign Up Link */}
          <p className="text-gray-300 text-center mt-4 text-sm sm:text-base">
            New here?{" "}
            <a href="/sign-up" className="text-[#A294F9] hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;