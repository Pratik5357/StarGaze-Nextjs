"use client"
import axios from 'axios';
import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Page() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.post('http://localhost:3000/api/auth/users/sign-up ', form);
          console.log(res.data);
          setError('');
          router.push('/sign-in');
      } catch (error) {
          if (error.response) {
              setError(error.response.data.message);
          }
          console.log(error);
      }
  };
  
    return (
      <div className="flex flex-col lg:flex-row contBox text-white">
        {/* Left Section - Info */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-8 py-12 ">
          <h1 className="text-4xl font-bold text-[#A294F9]">Join Stargaze</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-md">
            Explore the universe with Stargaze. Get daily Astronomy Pictures of the Day, 
            save your favorites, and dive into the wonders of space.
          </p>
        </div>
  
        {/* Right Section - Signup Form */}
        <div className="flex-1 flex justify-center items-center px-6 sm:px-12 lg:px-16   border-l max-md:border-none border-white/20">
          <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold text-center text-[#A294F9]">Sign Up</h2>
            <p className="text-gray-300 text-center mt-2">Create an account to begin your journey.</p>
  
            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              {/* Username Input */}
              <div>
                <label className="block text-gray-300 text-sm sm:text-base">Username</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-[#A294F9] outline-none"
                  placeholder="Enter your username"
                  required
                />
              </div>
  
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
                  placeholder="Create a password"
                  required
                />
              </div>
  
              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full mt-4 py-3 bg-[#A294F9] text-black font-semibold rounded-md transition-all hover:bg-[#CDC1FF] sm:text-lg"
              >
                Sign Up
              </button>
            </form>
  
            {/* Sign In Link */}
            <p className="text-gray-300 text-center mt-4 text-sm sm:text-base">
              Already have an account?{" "}
              <a href="/sign-in" className="text-[#A294F9] hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}